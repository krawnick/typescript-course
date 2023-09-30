import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { RootState } from '../store'
import { ITodo } from '../types/data'

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.list)

  return (
    <ul>
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
