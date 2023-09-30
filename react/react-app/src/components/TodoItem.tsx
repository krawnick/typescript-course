import { toggleComplete, removeTodo } from '../store/todoSlice'
import { useAppDispatch } from '../hook'
import { ITodo } from '../types/data'

export const TodoItem = ({ id, title, completed }: ITodo) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  )
}
