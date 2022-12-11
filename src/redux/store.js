import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import todoReducer from "./ToDoSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})