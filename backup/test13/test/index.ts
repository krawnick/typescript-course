// const isBirthdayData: boolean = false
// let ageData: number = 28
// const userNameData: string = 'Nikita'

const createError = (message: string): never => {
  console.error(message)
  throw new Error(message)
}

const userData = {
  isBirthdayData: true,
  ageData: 28,
  userNameData: 'Nikita',
  messages: {
    error: 'Error!',
  },
}

function logBrtMsg({
  isBirthdayData,
  ageData,
  userNameData,
  messages: { error },
}: {
  isBirthdayData: boolean
  ageData: number
  userNameData: string
  messages: { error: string }
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`
  } else if (isBirthdayData === false) {
    return 'Too bad'
  }
  console.error(error)
  return createError(error)
}

console.log(logBrtMsg(userData))
