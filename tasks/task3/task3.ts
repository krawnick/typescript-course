// Структура данных скалада с одеждой

// ClothesWarehouse {
//   jackets: 'empty' | number
//   hats: 'empty' | number
//   socks: 'empty' | number
//   pants: 'empty' | number
// }

// Структура данных склада с канцтоварами

// StationeryWarehouse {
//   scissors: 'empty' | number
//   paper: 'empty' | boolean
// }

// Структура данных склада с бытовой техникой

// AppliancesWarehouse {
//   dishwasers: 'empty' | number
//   cookers: 'empty' | number
//   mixers:  'empty' | number
// }

// Общая стурктура данных, наследует все данные из трех выше
// + Добавляет свои

// TotalWarehouse {
//   deficit: boolean
//   date: Date;
// }

// Главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
}

function printReport(data) {
  return `We need this items: ${'...'}`
  // или
  return 'Everything fine'
}