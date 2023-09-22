import {useState, useEffect, useRef} from 'react'
import {ITodo} from '../types/data.ts'

export const App = (): JSX.Element => {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo>([])

  const addTodo = () => {
    if (value) {
    setTodos([...todos], {
      id: Date.now(),
      title: value,
      completed: false,
    })
    }
    setValue('')
  }
  
  return (
    <div>
      <div>
        <input value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={''}>Add Todo</button>
        <h1>todos list</h1>
        <ul>
          {todos.length === 0 ? false : todos.map((todo) => <li>todo.title</li>)}
        </ul>
      </div>
  </div>
  )
}  