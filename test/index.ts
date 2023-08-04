let salary: number
salary = 500

interface UserData {
  isBirthdayData: boolean
  ageData: number
  userNameData: string
}

const userData =
  '{"isBirthdayData": true, "ageData": 28, "userNameData": "Nikita"}'

const userObj = JSON.parse(userData)
console.log(userObj)
