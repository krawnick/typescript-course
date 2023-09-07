class Box {
  // width!: number; || ts config: strictPropertyInitialization: false
  width: number
  height: number

  constructor(width: number) {
    this.width = width
    this.height = 500
  }
}

const firstBox = new Box(200)

console.log(firstBox)

class User {
  name!: string
}

const ivan = new User()
ivan.name = 'Ivan'
console.log(ivan)
