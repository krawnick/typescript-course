import 'reflect-metadata'
interface ICuboid {
  width: number
  length: number
  height: number
  calcArea: (multiply?: number) => number
  calcVolume: (multiply?: number) => number
}

@createdAt
class ShippingContainer implements ICuboid {
  @isInt()
  @isMin(1)
  width: number

  @isInt()
  @isMin(1)
  length: number

  @isInt()
  @isMin(1)
  @isMax(8)
  height: number
  createdAt: any
  lastCalc: any

  constructor(width: number, lenght: number, height: number) {
    this.width = width
    this.length = lenght
    this.height = height
    validate(this, 'width', width)
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
container.width = 0
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
    // let symbol = Symbol()

    // const getter = function (this: any) {
    //     return this[symbol]
    // }

    // const setter = function (this: any, newAmount: unknown) {
    //     if (typeof newAmount === 'number' && Number.isInteger(newAmount)) {
    //         this[symbol] = newAmount
    //     } else {
    //         throw new Error('Получено не целое число')
    //     }
    // }

    // Object.defineProperty(target, propertyKey, { get: getter, set: setter, enumerable: true, configurable: true })
    Reflect.defineMetadata('isInt', true, target, propertyKey)
  }
}

function isMin(value: number) {
  return function (target: Object, propertyKey: string | symbol) {
    // let symbol = Symbol()

    // const getter = function (this: any) {
    //     return this[symbol]
    // }

    // const setter = function (this: any, newAmount: number) {
    //     if (newAmount > value) {
    //         this[symbol] = newAmount
    //     } else {
    //         throw new Error('Получено значение меньше минимального')
    //     }
    // }

    // Object.defineProperty(target, propertyKey, { get: getter, set: setter, enumerable: true, configurable: true })
    Reflect.defineMetadata('isMin', value, target, propertyKey)
  }
}

function isMax(value: number) {
  return function (target: Object, propertyKey: string | symbol) {
    // let symbol = Symbol()

    // const getter = function (this: any) {
    //     return this[symbol]
    // }

    // const setter = function (this: any, newAmount: number) {
    //     if (newAmount > value) {
    //         this[symbol] = newAmount
    //     } else {
    //         throw new Error('Получено значение больше максимального')
    //     }
    // }

    // Object.defineProperty(target, propertyKey, { get: getter, set: setter, enumerable: true, configurable: true })
    Reflect.defineMetadata('isMax', value, target, propertyKey)
  }
}

function validate(target: any, propertyKey: string, value: any): boolean {
  if (
    Reflect.getMetadata('isInt', target, propertyKey) &&
    (!Number.isInteger(value) || value !== parseInt(value))
  ) {
    throw new Error(`${propertyKey} - нецелое число`)
  }

  if (
    Reflect.hasMetadata('isMin', target, propertyKey) &&
    value < Reflect.getMetadata('isMin', target, propertyKey)
  ) {
    throw new Error(
      `Минимальное значение ${propertyKey} должно быть ${Reflect.getMetadata(
        'isMin',
        target,
        propertyKey
      )}`
    )
  }

  return true
}
