// Модификатор optional

interface User {
  readonly login: string
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

// user213.login = 'Ivan'

const userFreeze: Readonly<User> = {
  login: 'First',
  password: 'qwerty',
  age: 25,
}

// userFreeze.age = 50

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

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555]
// const basicPorts: readonly number[] = [3000, 3001, 5555]

// basicPorts[0] = 3002
// basicPorts.push(3003)

const otherPorts: readonly [number, ...string[]] = [3000, '3001', '5555']
// otherPorts[0] = 3002
// otherPorts.push(3003)
