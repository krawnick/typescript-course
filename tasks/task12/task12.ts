interface ICuboid {
  width: number
  length: number
  height: number
  calcArea: (multiply?: number) => number
  calcVolume: (multiply?: number) => number
}

@createdAt
class ShippingContainer implements ICuboid {
  // @IsInt()
  // @Min(1)
  width: number

  // @IsInt()
  // @Min(1)
  length: number

  // @IsInt()
  // @Min(1)
  // @Max(8)
  height: number
  createdAt: any
  lastCalc: any

  constructor(width: number, lenght: number, height: number) {
    this.width = width
    this.length = lenght
    this.height = height
  }

  @fixLastCalc('calcArea')
  calcArea(multiply?: number): number {
    return this.width * this.length * (multiply ? multiply : 1)
  }

  @fixLastCalc('calcVolume')
  calcVolume(multiply?: number): number {
    return this.width * this.length * this.height * (multiply ? multiply : 1)
  }
}

const container = new ShippingContainer(10, 100, 10)
container.width = 1
container.height = 5
console.log(container)
console.log(container.calcArea())
console.log(container.lastCalc)
console.log(container.calcVolume())
console.log(container.lastCalc)

console.log(container.calcVolume())

function createdAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}

function fixLastCalc(method: string) {
  // console.log('method', method)
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void => {
    // console.log('target', target)
    // console.log('PK', propertyKey)
    // console.log('descriptor', descriptor)
    console.log('descriptor.value', descriptor.value)

    const oldValue = descriptor.value
    descriptor.value = function (this: any, ...args: any[]) {
      this.lastCalc = `Последний подсчет ${method} был ${new Date()}`
      return oldValue.apply(this, args)
    }
  }
}

function isInt() {
  return function (target: Object, propertyKey: string | symbol) {
    let symbol = Symbol()

    const getter = function (this: any) {
      return this[symbol]
    }

    const setter = function (this: any, newAmount: unknown) {
      if (typeof newAmount === 'number' && Number.isInteger(newAmount)) {
        this[symbol] = newAmount
      } else {
        throw new Error('Получено не целое число')
      }
    }

    Object.defineProperty(target, propertyKey, { get: getter, set: setter })
  }
}

function isMin(value: number) {
  return function (target: Object, propertyKey: string | symbol) {
    let symbol = Symbol()

    const getter = function (this: any) {
      return this[symbol]
    }

    const setter = function (this: any, newAmount: number) {
      if (newAmount > value) {
        this[symbol] = newAmount
      } else {
        throw new Error('Получено значение меньше минимального')
      }
    }

    Object.defineProperty(target, propertyKey, { get: getter, set: setter })
  }
}
