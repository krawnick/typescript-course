import { TodoItem } from './TodoItem'

import { ITodo } from '../types/data'

interface ITodoListProps {
  items: ITodo[]
}

export const TodoList = (props: ITodoListProps): JSX.Element => {
  return (
    <div>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}
