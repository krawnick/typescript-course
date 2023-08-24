// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<T, S> {
  game: T
  hours: S
  server: string
}

const player1: PlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic',
}

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade',
}

const player3: PlayerData<string, { total: number; inMenu: number }> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: 'chess',
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number
  circles: number
  triangles: number
  others: number
}

enum NamesFigures {
  Rect = 'rect',
  Triangle = 'triangle',
  Line = 'line',
  Circle = 'circle',
}

interface Figure {
  name: NamesFigures
  data?: object
}

function calculateAmountOfFigures(figures: Figure[]): AmountOfFigures {
  const amount: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  }

  figures.forEach((figure) => {
    switch (figure.name) {
      case NamesFigures.Circle: {
        amount.circles++
        break
      }

      case NamesFigures.Rect: {
        amount.squares++
        break
      }

      case NamesFigures.Triangle: {
        amount.triangles++
        break
      }

      default:
        amount.others++
        break
    }
  })

  return amount
}

const data: Figure[] = [
  {
    name: NamesFigures.Rect,
    data: { a: 5, b: 10 },
    // data: 5,
  },
  {
    name: NamesFigures.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: NamesFigures.Triangle,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: NamesFigures.Line,
    data: { l: 15 },
  },
  {
    name: NamesFigures.Circle,
    data: { r: 10 },
  },
  {
    name: NamesFigures.Circle,
    data: { r: 5 },
  },
  {
    name: NamesFigures.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: NamesFigures.Triangle,
  },
]

console.log(calculateAmountOfFigures(data))
