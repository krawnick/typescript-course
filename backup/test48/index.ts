class User<T, S> {
  name: T
  age: S

  constructor(name: T, age: S) {
    this.name = name
    this.age = age
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== 'string') {
      return `I have only name ${this.name}`
    } else {
      return `${this.name} ${surname}`
    }
  }
}

// class AdminUser<T> extends User<string, number> {
//   rules: <T>
// }

const nikita = new User('Nikita', 28)
console.log(nikita.sayMyFullName('Kravtsov'))

const nameData = 'Alex'
const ageData = 24

const alex = new User<string, number>(nameData, ageData)
