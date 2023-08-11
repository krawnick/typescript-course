let salary: number
salary = 500

interface UserData {
  isBirthdayData: boolean
  ageData: number
  userNameData: string
}

const arr = ['sss', 5, true]

const userData =
  '{"isBirthdayData": true, "ageData": 28, "userNameData": "Nikita"}'

const userObj = JSON.parse(userData)
console.log(userObj)

let isOkay = true
let movement: boolean | string = false
if (isOkay) {
  movement = 'moving'
}
