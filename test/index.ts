const test: null = null
const test2: any = null

const test3: undefined = undefined
const test4: any = undefined

let smth //any

const getRndmNum = () => {
  if (Math.random() > 0.5) {
    return null
  } else {
    return '   Some data   '
  }
}

const data = getRndmNum()
const trimmedData = data ? data.trim() : null
