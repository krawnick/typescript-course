function proccesingData<T>(data: T): T {
  // ...
  return data
}

const res1 = proccesingData(1)
const res2 = proccesingData('string')

const num = 10

// const res3 = proccesingData<number>('ae')
const res3 = proccesingData<number>(num)

interface PrintFR {
  design: number
}

interface PrinrES {
  design: string
}

interface Print<T> {
  design: T
}

const somePrint: Print<string> = { design: 'ten' }
const someOtherPrint: Print<number> = { design: 1 }
