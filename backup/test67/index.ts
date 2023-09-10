class Box {
  height: number = 500
  width: number
  volume: number | undefined
  _content: string | undefined

  constructor(width: number, volume?: number, content?: string) {
    this.width = width
    this.volume = volume
    this._content = content
  }

  calculateVolume(): void {
    if (!this.volume) {
      this.volume = this.width * this.height
      console.log(`Volume package: ${this.volume}`)
    } else {
      console.log(`Volume package: ${this.volume}`)
    }
  }

  checkBoxSize(transport: number): string
  checkBoxSize(transport: number[]): string
  checkBoxSize(transport: number | number[]): string {
    if (typeof transport === 'number') {
      return transport >= this.width ? 'OK' : 'Not OK'
    } else if (Array.isArray(transport)) {
      return transport.some((t) => t >= this.width) ? 'OK' : 'Not OK'
    } else {
      return 'Error type'
    }
  }

  // get content() {
  // 	return this._content
  // }

  // set content(value) {
  // 	this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`
  // }

  async content(value: string) {
    const date = await new Date().toTimeString()
    this._content = `Date: ${date}, Content: ${value}`
  }
}

const firstBox = new Box(250)
firstBox.volume = 50000

console.log(firstBox.calculateVolume())

console.log(firstBox.checkBoxSize([240, 230, 220]))
console.log(firstBox.checkBoxSize(270))

// console.log(firstBox.content = 'test')
// console.log(firstBox.content)

class Styles {
  [s: string]: string | ((s: string) => boolean)

  method(b: unknown): boolean {
    return !!b
  }
}

const style = new Styles()

style.color = 'white'
style.font = 'Roboto'

console.log(style.method(null))
