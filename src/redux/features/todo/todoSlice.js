import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncTodo = createAsyncThunk(
  "todo/asyncTodo",
  async (_, { rejectWithValue }) => {
    try {
      const items = await axios.get("http://localhost:3006/todo");
      return items.data;
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
      const title = action.payload;
      const todo = { id: Date.now(), title: title, completed: false };
      state.data.push(todo);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filterTodo = state.data.filter((i) => {
        return i.id !== id;
      });
      state.data = filterTodo;
    },
    completeTodo: (state, action) => {
      const id = action.payload;
      const find = state.data.find((i) => {
        return i.id === id;
      });
      find.completed = !find.completed;
    },
  },
  extraReducers: {
    [asyncTodo.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, loading: false, err: null };
    },
    [asyncTodo.pending]: (state, action) => {
      return { ...state, data: [], loading: true, err: null };
    },
    [asyncTodo.rejected]: (state, action) => {
      return { ...state, data: [], loading: false, err: action.error };
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
