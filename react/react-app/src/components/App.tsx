import { useState, useEffect, useRef } from 'react'
import { TodoList } from './TodoList'
import { ITodo } from '../types/data'

export const App = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

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

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    )
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <div>
      <div>
        <input
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={() => addTodo()}>Add Todo</button>
        <h1>todos list</h1>
        <TodoList
          items={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  )
}
