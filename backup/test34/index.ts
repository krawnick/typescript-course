const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log('Fetched')
}

// const reqOpt =
// : {
//   url: string
//   method: 'GET' | 'POST'
// }
// {
//   url: 'https://someurl.com',
//   method: 'GET' as 'GET',
// }

// const reqOpt = {
//   url: 'https://someurl.com',
//   method: 'GET',
// } as const

const reqOpt = {
  url: 'https://someurl.com',
  method: 'GET',
}

fetchData('qqq', 'GET')
// fetchData(reqOpt.url, reqOpt.method as 'GET')
// fetchData(reqOpt.url, reqOpt.method)
fetchData(reqOpt.url, <'GET'>reqOpt.method)

const box = document.querySelector('.box') as HTMLElement
const input = document.querySelector('input') as HTMLInputElement
console.log(input)

// const someNumber: number = +input.value as any as number
const someNumber: number = +input.value
console.log(someNumber)
// box.style
// box?.classList
// console.log(box)

let a = 'value' as const

let b = { f: 100 } as const
let c = [] as const

let value = 'value'
let arr = ['sf', 'asdf']
let obj = { f: 100 }

// let T0 = value as const

let q = Math.round(Math.random() * 1) ? 'yes' : ('no' as const)
