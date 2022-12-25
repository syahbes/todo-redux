import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./LoginSlice"
import asynctodoReducer from "./AsyncTodoSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    asynctodo: asynctodoReducer,
  }
})