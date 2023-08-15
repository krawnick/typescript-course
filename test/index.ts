// let num: Number = new Number(5)
// let num2: number = 5
// let num3: number = Number(5)

// console.log(num == num2, num === num2, num, num2)
// console.log(typeof num)
// console.log(typeof num3)

// num = num2

const num = 5
const strNum: string = num.toString()
const str = '5'
const numStr: number = +str

interface Department {
  name: string
  budget: number
}

const department: Department = {
  name: 'web-dev',
  budget: 50000,
}

interface Project {
  name: string
  projectBudjet: number
}

// const mainProject: Project = {
//   ...department,
//   projectBudjet: 5000,
// }

function tranformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudjet: amount,
  }
}

const mainProject = tranformDepartment(department, 4000)
console.log(mainProject)
