import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncTodo = createAsyncThunk(
  "todo/asyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todo = await axios.get("http://localhost:3006/todo");
      console.log(todo);
      return todo.data;
    } catch (error) {
      console.log(error);
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
      const titleTodo = action.payload;

      const data = { id: Date.now(), title: titleTodo, completed: false };
      state.data.push(data);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filter = state.data.filter((i) => {
        return i.id !== id;
      });
      state.data = filter;
    },
    completeTodo: (state, action) => {
      const id = action.payload;
      const findItem = state.data.find((i) => {
        return i.id === id;
      });
      findItem.completed = !findItem.completed;
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
      return { ...state, data: [], loading: false, err: action.error.message };
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
