export type TProducts = IShoes[] | ITshirt[]
export type TProduct = IShoes | ITshirt

export interface IProduct {
  id: number
  gender: string
  brand: string
  title: string
  price: number
  material: string
  model: string
  season: string
  color: string
  description: string
  imgSrcUrl: string[]
  imgSrc: string[]
}

interface IShoes extends IProduct {
  category: 'shoes'
  size: number[]
}

interface ITshirt extends IProduct {
  category: 'tshirt'
  size: 's' | 'm' | 'l'
}

const shoes: TProduct = {
  id: 123,
  gender: 'male',
  brand: 'nike',
  title: 'Nike',
  price: 123,
  material: 'eco',
  model: 'running',
  season: 'summer',
  color: 'blue',
  description: 'this is cool shoes',
  imgSrcUrl: ['wwww', 'http'],
  imgSrc: ['png', 'jpg'],

  category: 'shoes',
  size: [39, 40, 41],
}

const tshirt: TProduct = {
  id: 124,
  gender: 'male',
  brand: 'nike',
  title: 'Nike',
  price: 123,
  material: 'eco',
  model: 'running',
  season: 'summer',
  color: 'blue',
  description: 'this is cool shoes',
  imgSrcUrl: ['wwww', 'http'],
  imgSrc: ['png', 'jpg'],

  category: 'tshirt',
  size: 'm',
}
