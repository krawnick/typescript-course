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

  createdAt: Date

  constructor(width: number, lenght: number, height: number) {
    this.width = width
    this.length = lenght
    this.height = height
  }

  calcArea(multiply?: number): number {
    return this.width * this.length * (multiply ? multiply : 1)
  }

  calcVolume(multiply?: number): number {
    return this.width * this.length * this.height * (multiply ? multiply : 1)
  }
}

const container = new ShippingContainer(10, 100, 10)
console.log(container)
// container.width = 0
// container.height = 5
// console.log(container.calcVolume())

function createdAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}
