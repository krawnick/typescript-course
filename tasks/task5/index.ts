// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type Animal = 'cat' | 'dog' | 'bird'

enum AnimalStatus {
  Available = 'available',
  NotAvailable = 'notAvailable',
}

interface AnimalAvailableData {
  animal: Animal
  breed: string
  sterilized?: boolean
  location: string
  age?: number
}

interface AnimalNotAvailableData {
  message: string
  nextUpdateIn: Date
}

interface AnimalAvailableResponse {
  status: AnimalStatus.Available
  data: AnimalAvailableData
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable
  data: AnimalNotAvailableData
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse

function isAvailable(res: Res): res is AnimalAvailableResponse {
  if (res.status === AnimalStatus.Available) {
    return true
  }
  return false
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`
  }
}

const reuslt = checkAnimalData({
  status: AnimalStatus.Available,
  data: {
    animal: 'cat',
    breed: 'snow-shu',
    sterilized: true,
    location: 'V-Pyshma',
  },
})

console.log(reuslt)
