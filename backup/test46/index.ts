interface ProccesingFn {
  <T>(data: T): T
}

function proccesing<T>(data: T): T {
  return data
}

let newFunc: ProccesingFn = proccesing

console.log(newFunc(10))

type Smth<T> = T

const num: Smth<number> = 5

// type User<T> = {
//     login: T,
//     age: number,
// }

interface ParentsOfUser {
  mother: string
  father: string
}

interface User<ParentsData extends ParentsOfUser> {
  login: string
  age: number
  parents: ParentsData
}

const user: User<{ mother: string; father: string; married: boolean }> = {
  login: 'krawnick',
  age: 28,
  parents: {
    mother: 'Irina',
    father: 'Ivan',
    married: true,
  },
}

// const user2: User<string> = {
//     login: 'krawnick',
//     age: 28,
//     parents: ''
//     }

type OrNull<Type> = Type | null

const orNull: OrNull<string> = 'Not Null'
const orNullTwo: OrNull<string> = null

type OneOrMany<Type> = Type | Type[]

const data: OneOrMany<number> = [5, 5, 5]

const depositMoney = <T extends number | string>(amount: T): T => {
  console.log(`req to server with amount: ${amount}`)
  return amount
}

//  const depositMoney = (amount: number | string): number | string => {
//     console.log(`req to server with amount: ${amount}`)
//     return amount
// }

depositMoney(400)
depositMoney('400')
// depositMoney(false)
