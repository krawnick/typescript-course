function proccesingData<T, S>(data: T, option: S): string {
  switch (typeof data) {
    case 'string':
      return `${data}, speed: ${option}`
      break
    case 'number': {
      return `${data.toFixed()}, speed: ${option}`
    }
    default:
      return 'Not valid'
  }
}

const res1 = proccesingData(1, 'fast')
const res2 = proccesingData('string', 'slow')
const res3 = proccesingData<number, string>(10, 'abc')

console.log(res1)
console.log(res2)
console.log(res3)

function proccesing<T>(data: T): T {
  return data
}

interface ProccesingFn {
  <T>(data: T): T
}

// let newFunc: <T>(data: T) => T = proccesing
let newFunc: ProccesingFn = proccesing

// interface DataSaver {
//   proccesing: <T>(data: T) => T
// }

interface DataSaver {
  proccesing: typeof proccesing
}

const saver: DataSaver = {
  // proccesing(data) {
  //   console.log(data)
  //   return data
  // }

  //   proccesing: <T>(data: T) => {
  //     return data
  //   }

  // proccesing: (data) => {
  //   return data
  // },

  proccesing: proccesing,
}
