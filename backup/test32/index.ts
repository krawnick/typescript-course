// let smth: any
// let smth: unknown

// smth = 'str'

// let data: string[] = smth
// data.find(e => e)

// const someValue: unknown = 10
// someValue.method()

// console.log(data)

function fetchData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toLowerCase())
  }
}

const userData =
  '{"isBirthdayData": true, "ageData": 28, "userNameData": "Nikita"}'

function safeParse(s: string): unknown {
  return JSON.parse(s)
}

const data = safeParse(userData)

console.log(data)

function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase)
  } else if (typeof d === 'object' && d) {
    console.log(d)
  } else {
    console.error('Some error')
  }
}

transferData(data)

// try {
//   if (1) {
//     throw 'error!!!!'
//   }
// } catch (e) {
//   console.log(typeof e, e)
// }

try {
  if (1) {
    throw new Error('error!!!!')
  }
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message)
  } else if (typeof e === 'string') {
    console.log(e)
  }
}

type T0 = any | unknown // any
type T1 = number | unknown // unknown

type T2 = any & unknown // any
type T3 = number & unknown // number
