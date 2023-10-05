import { toggleStatus, deleteTodo } from '../store/todoSlice'
import { useAppDispatch } from '../hook'
import { ITodo } from '../types/data'

export const TodoItem = ({ id, title, completed }: ITodo): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  )
}

//
