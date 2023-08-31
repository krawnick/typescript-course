interface Currencies {
  usa: 'usd'
  china: 'cby'
  ukraine: 'uah'
  kz: 'tenge'
}

type CurrWithoutUsaAndUk = Omit<Currencies, 'usa' | 'ukraine'> // исключение

const currUsaAndUkraine: CurrWithoutUsaAndUk = {
  china: 'cby',
  kz: 'tenge',
}

type CurrUsaAndUkraine = Pick<Currencies, 'usa' | 'ukraine'> // фильтрация по свойству

const currUsaAndUkraine2: CurrUsaAndUkraine = {
  usa: 'usd',
  ukraine: 'uah',
}

type CountriesWithoutUsa = Exclude<keyof Currencies, 'usa'>

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string
}

type PlayersNames = 'alex' | 'john'
type CustomCurrencies = CreateCustomCurr<Currencies>
type GameDataCurr = Record<PlayersNames, CustomCurrencies>

const gameData: GameDataCurr = {
  alex: {
    customChina: 'qwerty',
    customKz: '213',
    customUkraine: '12ed',
    customUsa: '213dsad',
  },
  john: {
    customChina: 'qwerasdty',
    customKz: '2132qe',
    customUkraine: '12edasd',
    customUsa: '213dsasdad',
  },
}

type FadeType = Exclude<MyAnimation, 'swipe'> // удаление из union type
type SwipeType = Extract<MyAnimation | Direction, 'swipe'> // выбор подходящего типа

type MyAnimation = 'fade' | 'swipe'
type Direction = 'in' | 'out'

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`
