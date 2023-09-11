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
  //   return this._content
  // }

  // set content(value) {
  //   this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`
  // }

  async content(value: string) {
    const date = await new Date().toTimeString()
    this._content = `Date: ${date}, Content: ${value}`
    // return this._content
  }
}

const firstBox = new Box(250)

// console.log((firstBox.content = 'test'))
// console.log(firstBox.content)

class PresentBox extends Box {
  wrap: string
  height: number

  constructor(wrap: string, width: number) {
    super(width)

    this.wrap = wrap
  }

  override async content(value: string, text?: string) {
    const date = await new Date().toTimeString()

    if (!text) {
      super.content(value)
    } else {
      this._content = `Date: ${date}, Content: ${value}, Text: ${
        text ? text : 'No text'
      }`
    }

    console.log(this._content)
    // return this._content
  }
}

new PresentBox('red', 500).content('TV', 'Gift')
