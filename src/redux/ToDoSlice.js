import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodos = [...state.value, { text: action.payload }];
      state.value = newTodos;
    },
    remove: (state, action) => {
      const newTodos = [...state.value];
      newTodos.splice(action.payload, 1);
      state.value = newTodos;
    },
    toggle: (state, action) => {
      const newTodos = [...state.value];
      newTodos[action.payload].completed = !newTodos[action.payload].completed;
      state.value = newTodos;
    },
  },
});

export const { add, remove, toggle } = ToDoSlice.actions;
export const selectTodo = (state) => state.todo.value;
export default ToDoSlice.reducer;
