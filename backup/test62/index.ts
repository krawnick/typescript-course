const jsonTest = '{"name": "test", "data": 4}'

interface JsonTest {
  name: string
  data: number
}

const objFromJson: JsonTest = JSON.parse(jsonTest)

// console.log(objFromJson)

let todoList: Todo[] = []

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
// 	.then(json => {
// 		if ('id' in json) {
// 			todoList.push(json)
// 		}
// 		console.log(todoList)
// 	})

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    if ('id' in json) {
      todoList.push(json)
    } else if (Array.isArray(json)) {
      todoList = json
    } else {
      console.log(`${json} - is a string`)
    }
    // console.log(todoList)
  })

const promise = new Promise<string>((resolve, reject) => {
  resolve('test')
})

promise.then((value) => {
  console.log(value.toUpperCase())
})
