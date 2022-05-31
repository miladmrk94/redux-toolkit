import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncTodos = createAsyncThunk(
  "todo/asyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todo = await axios.get("http://localhost:3005/todos");
      return todo.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    loading: false,
    err: null,
  },

  reducers: {
    addTodo: (state, action) => {
      const newData = { id: Date.now, title: action.payload, completed: false };
      state.data.push(newData);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filter = state.data.filter((i) => {
        return i.id !== id;
      });
      state.data = filter;
    },
    completedTodo: (state, action) => {
      const id = action.payload;

      const find = state.data.find((i) => {
        return i.id === id;
      });

      find.completed = !find.completed;
    },
  },
  extraReducers: {
    [asyncTodos.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, loading: false, err: null };
    },
    [asyncTodos.pending]: (state, action) => {
      return { ...state, data: [], loading: true, err: null };
    },
    [asyncTodos.rejected]: (state, action) => {
      return { ...state, data: [], loading: false, err: action.error.message };
    },
  },
});

export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
