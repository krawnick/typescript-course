// const isBirthdayData: boolean = true
// let ageData: number = 28
// const userNameData: string = 'Nikita'

const userData =
  '{"isBirthdayData": true, "ageData": 28, "userNameData": "Nikita"}'

const userObj: {
  isBirthdayData: boolean
  userNameData: string
  ageData: number
} = JSON.parse(userData)

console.log(userObj)

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

console.log(
  logBrtMsg(userObj.isBirthdayData, userObj.userNameData, userObj.ageData)
)
