const isBirthdayData: boolean = false
let ageData: number = 28
const userNameData: string = 'Nikita'

const createError = (message: string): never => {
  console.error(message)
  throw new Error(message)
}

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
  } else if (isBirthday === false) {
    return 'Too bad'
  }
  return createError('Error!')
}

logBrtMsg(isBirthdayData, userNameData, ageData)
