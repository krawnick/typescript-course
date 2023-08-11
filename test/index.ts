// Модификатор optional

interface User {
  login: string
  passwort: string
  age: number
  addr?: string
  parents?: {
    mother?: string
    father?: string
  }
}

const user213: User = {
  login: 'krawnick',
  passwort: '1234',
  age: 28,
  addr: 'Uspenskiy 18',
}

const dbName = 'string'

function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase())
}
