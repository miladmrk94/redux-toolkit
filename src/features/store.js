import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "../features/counter/counterSlice";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: todosReducer,
  },
});

export default store;
