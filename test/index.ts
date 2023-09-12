class Player {
  #login: string
  private _password: string
  public server: string // public по умолчанию
  protected consent: boolean

  get password() {
    return this._password
  }

  set password(newPassword: string) {
    // Validation
    this._password = newPassword
  }
}

const test = new Player()

class CompetitivePlayer extends Player {
  rank: number

  private isConsented() {
    this.consent ? 'Yes' : 'No'
  }
}

const player = new Player()
player.password = 'asd'

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
