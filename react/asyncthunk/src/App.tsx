import { useState, useEffect } from 'react'
import { useAppDispatch } from './hook'

// import { addTodo } from './store/todoSlice'
import { fetchTodos, addNewTodo } from './store/todoSlice'
import { NewTodoForm } from './components/NewTodoForm'
import { TodoList } from './components/TodoList'

import './App.css'

function App() {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text))
      setText('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  )
}

export default App
