import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {}

export const TodoItem = (props: ITodoItem): JSX.Element => {
  const { title, completed } = props
  return (
    <div>
      <input type="checkbox" checked={completed} />
      {title}
      <button onClick={''}>X</button>
    </div>
  )
}
