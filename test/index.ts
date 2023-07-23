const isBirthdayData: boolean = true
let ageData: number = 28
const userNameData: string = 'Nikita'

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   return isBirthday
//     ? `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
//     : 'Error!'
// }

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  return isBirthday
    ? `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
    : 'Error!'
}

console.log(logBrtMsg(isBirthdayData, userNameData, ageData))
