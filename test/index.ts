const message: string | number = 5
const messages: string[] | number[] = ['a', 'b']

// function printMsg(msg: string | number): void {
//   if (typeof msg === 'string') {
//     console.log(msg.toLowerCase())
//   } else {
//     console.log(msg.toExponential())
//   }
// }

// printMsg(4)
// printMsg('a')

// function printMsg(msg: string | number | boolean): void {
//     if (typeof msg === 'string' || typeof msg === 'number') {
//       console.log(msg.toString())
//     } else {
//       console.log(msg)
//     }
//     console.log(msg)
//   }

//   printMsg(4)
//   printMsg('a')

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m))
//   } else if (typeof msg === 'number') {
//     console.log(msg.toFixed())
//   } else {
//     console.log(msg)
//   }
// }

// printMsg(4)
// printMsg(['a'])

const printReadings = (a: number | string, b: number | boolean): void => {
  if (a === b) {
    console.log(a, b)
  }
}

const printReadings2 = (a: number[] | string): void => {
  console.log(a.slice(0, 3))
}

const checkReadings = (
  readings: { system: number } | { user: number }
): void => {
  if ('system' in readings) {
    console.log(readings.system)
  } else {
    console.log(readings.user)
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getFullYear())
  } else {
    console.log(x)
  }
}

console.log(logValue(new Date()))
