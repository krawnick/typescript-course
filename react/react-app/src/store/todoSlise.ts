import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Todo = {
  id: string
  title: string
  completed: boolean
}

type TodosState = {
  list: Todo[]
}

const initialState: TodosState = {
  list: [],
}

const todoSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.text,
        completed: false,
      })
    },
    toggleComplete(state, action) {
      const toggledTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      )
      toggledTodo.completed = !toggledTodo.completed
    },
    removeTodo(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions

export default todoSlice.reducer
