interface ICompany {
  name: string
  debts: number
  departments: Department
  management: {
    owner: string
  }
}

interface Department {
  [key: string]: string
}

// const debts = 'debts'
let debts = 'debts' as 'debts'

type CompanyDebtsType = ICompany[typeof debts]

// type CompanyDebtsType = typeof ICompany.debts неверное получение типа
// type CompanyDebtsType = ICompany['debts']
type CompanyOwnerType = ICompany['management']['owner']
type CompanyDepartmentsType = ICompany['departments'][number] // Получение одного интерфейса
type CompanyDepartmentsTypes = ICompany['departments']

type Test = ICompany[keyof ICompany]

type CompanyKeys = keyof ICompany
const keys: CompanyKeys = 'debts'

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`company ${company[name]}, debts: ${company[debts]}`)
}

const google: ICompany = {
  name: 'google',
  debts: 50000,
  departments: {
    sales: 'sales',
    developer: 'dev',
  },
  management: {
    owner: 'John',
  },
}

type GoogleKeys = keyof typeof google
const key: GoogleKeys = 'name'
