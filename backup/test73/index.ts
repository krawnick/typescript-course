function setName() {
  return 'COD'
}

class Player {
  private static game: string

  #login: string
  private _password: string
  public server: string // public по умолчанию
  protected consent: boolean

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
}

class CompetitivePlayer extends Player {
  rank: number

  private isConsented() {
    this.consent ? 'Yes' : 'No'
  }
}

new Player()
console.log(Player.getGameName())

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
