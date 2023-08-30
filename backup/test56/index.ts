type Currencies = {
  usa: 'usd'
  china: 'cby'
  ukraine?: 'uah'
  readonly kz: 'tenge'
}

type CreateCustomCurr<T> = {
  -readonly [P in keyof T]-?: string
}

type ROnlyCurr = Readonly<Currencies>

type CustomCurrencies = CreateCustomCurr<Currencies>

// type CustomCurrencies = {
// 	usa: string,
// 	china: string,
// 	ukraine: string,
// 	kz: string,
// }

// type СопоставиыйТип = {
// 	[произвольныйИндентификатор in множество]: ПроизвольныйТипДанных
// }

type Keys = 'name' | 'age' | 'role'

type User = {
  [K in Keys]: string
}

const alex: User = {
  name: 'Alex',
  age: '25',
  role: 'admin',
}
