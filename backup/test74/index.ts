function setName() {
  return 'COD'
}

class Player {
  private static game: string

  #login: string
  private _password: string
  public server: string // public по умолчанию
  protected consent: boolean

  constructor(login: string) {
    this.#login = login
  }

  static {
    Player.game = setName()
  }

  // constructor(game: string) {
  // 	Player.game = game
  // }

  //   private constructor() {}
  //   protected constructor() {}

  get password() {
    return this._password
  }

  set password(newPassword: string) {
    // Validation
    this._password = newPassword
  }

  static getGameName() {
    return Player.game
  }

  logIn = () => {
    return `Player ${this.#login} online`
  }

  connect() {
    // Do smth
    return this
  }

  isPro(): this is CompetitivePlayer {
    return this instanceof CompetitivePlayer
  }
}

class CompetitivePlayer extends Player {
  rank: number

  checkLogin() {
    return this.logIn()
  }

  private isConsented() {
    this.consent ? 'Yes' : 'No'
  }
}

const player = new Player('test')
console.log(player.logIn())
console.log(player.connect().logIn())

const player2 = new CompetitivePlayer('test2')
console.log(player2.checkLogin())
console.log(player2.connect().logIn())

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer('test3')
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer)

// const test = player.logIn.bind(player)
const test = player.logIn
test()

// new Player()
// console.log(Player.getGameName())

class User {
  public email: string
  public name: string

  constructor(email: string, name: string) {
    this.email = email
    this.name = name
  }
}

class UserTwo {
  constructor(public email: string, public name: string) {}
}
