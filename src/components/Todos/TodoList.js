import React, { useEffect } from "react";
import {
  asyncTodo,
  completeTodo,
  deleteTodo,
} from "../../features/todo/todoSlice";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const { loading, data, err } = useSelector((state) => state.todo);
  console.log(data);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const checkHandler = (id) => {
    dispatch(completeTodo(id));
  };

  useEffect(() => {
    dispatch(asyncTodo());
  }, []);

  const dataHandler = () => {
    if (data && !loading && !err) {
      return data.map((todo) => (
        <TodoItem
          key={todo.id}
          deleteHandler={() => deleteHandler(todo.id)}
          title={todo.title}
          completed={todo.completed}
          checkHandler={() => checkHandler(todo.id)}
        />
      ));
    }
    if (loading) {
      return <h2>Loading....</h2>;
    }
    if (err) {
      return <h3 className="alert-danger">{err}</h3>;
    }
  };

  return <ul className="list-group">{dataHandler()}</ul>;
};

export default TodoList;
