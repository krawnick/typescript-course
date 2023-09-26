import { TodoItem } from './TodoItem'

import { ITodo } from '../types/data'

interface ITodoListProps {
  items: ITodo[]
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

export const TodoList = (props: ITodoListProps): JSX.Element => {
  const { items, toggleTodo, removeTodo } = props

  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          {...todo}
        />
      ))}
    </div>
  )
}
