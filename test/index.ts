// class Box {
// 	// width!: number; || ts config: strictPropertyInitialization: false
// 	width: number;
// 	height: number;
// 	volume: string;

// 	constructor(volume: string)
// 	constructor(width: number)
// 	constructor(widthOrVolume: number | string) {
// 		if (typeof widthOrVolume === 'number') {
// 			this.width = widthOrVolume
// 		} else {
// 			this.volume = widthOrVolume
// 		}

// 		this.height = 500
// 	}
// }

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
  name: string
}

const ivan = new User()
ivan.name = 'Ivan'
console.log(ivan)
