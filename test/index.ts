type voidFunc = () => void

const retString: voidFunc = () => {
  // ..some magic
  return 'string'
}

const s = retString()

const retNum: voidFunc = () => {
  // ..some magic
  return 5
}

const n = retNum()

console.log(s, n)

// function f2(): void {
//     return true
// }

// const f3 = function (): void {
//     return true
// }

const names = ['Nikita', 'Nastya']
const newArray = names.slice()

names.forEach((name, index, array) => array.push('Shoti'))

console.log(names)
