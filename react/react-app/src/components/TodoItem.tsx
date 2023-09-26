import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

export const TodoItem = (props: ITodoItem): JSX.Element => {
  const { id, title, completed, removeTodo, toggleTodo } = props
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  )
}
