import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newData = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newData);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filter = state.filter((i) => {
        return i.id !== id;
      });
      return filter;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
