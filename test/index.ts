// Модификатор optional

interface User {
  login: string
  password: string
  age: number
  addr?: string
  parents?: {
    mother?: string
    father?: string
  }
}

const user213: User = {
  login: 'krawnick',
  password: '1234',
  age: 28,
  addr: 'Uspenskiy 18',
  parents: {
    mother: 'Irina',
    father: 'Ivan',
  },
}

// const dbName = 'string'

// function sendUserData(obj: User, db?: string): void {
//   console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase())
// }

// Отлючение проверки свойства "!" (Оператор Not-Null Not-Undefined)

let dbName: string

sendUserData(user213, 'string')

console.log(dbName!)

function sendUserData(obj: User, db?: string): void {
  dbName = 'string'
  console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase())
}
