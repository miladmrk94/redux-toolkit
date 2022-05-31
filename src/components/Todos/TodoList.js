import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncTodos,
  completedTodo,
  deleteTodo,
} from "../../features/todo/todoSlice";

const TodoList = () => {
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];

  const { data, loading, err } = useSelector((state) => state.todo);
  console.log(data, err);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const checkHandler = (id) => {
    dispatch(completedTodo(id));
  };

  useEffect(() => {
    dispatch(asyncTodos());
  }, []);

  const handlerAsyncReq = () => {
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

  return <ul className="list-group">{handlerAsyncReq()}</ul>;
};

export default TodoList;
