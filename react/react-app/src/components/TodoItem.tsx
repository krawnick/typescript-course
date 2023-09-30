import { useDispatch } from 'react-redux'
import { toggleComplete, removeTodo } from '../store/todoSlice'

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  )
}
