import { useState, useEffect, useRef } from 'react'
import { TodoList } from './TodoList'
import { ITodo } from '../types/data'

export const App = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ])
      setValue('')
    }
  }

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => addTodo()}>Add Todo</button>
        <h1>todos list</h1>
        <TodoList items={todos} />
      </div>
    </div>
  )
}
