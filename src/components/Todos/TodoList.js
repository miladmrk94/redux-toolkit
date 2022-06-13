import React, { useEffect } from "react";

import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncTodo,
  completeTodo,
  deleteAsyncTodo,
  deleteTodo,
  completeAsyncTodo,
} from "../../redux/features/todo/todoSlice";

const TodoList = () => {
  const { data, loading, err } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteAsyncTodo(id));
  };
  const checkHandler = (id) => {
    dispatch(completeAsyncTodo(id));
  };

  const dataHandler = () => {
    if (data.length > 0) {
      return data.map((i) => {
        return (
          <TodoItem
            key={i.id}
            deleteHandler={() => deleteHandler(i.id)}
            title={i.title}
            completed={i.completed}
            checkHandler={() => checkHandler(i.id)}
          />
        );
      });
    }
    if (loading) {
      return <h3>loading....</h3>;
    }
    if (err) {
      return <h3>{err.message}</h3>;
    }
  };

  useEffect(() => {
    const items = dispatch(asyncTodo());
    console.log(items);
  }, []);

  return <ul className="list-group">{dataHandler()}</ul>;
};

export default TodoList;
