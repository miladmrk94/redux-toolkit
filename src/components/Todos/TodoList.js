import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../features/todos/todosSlice";

const TodoList = () => {
  //   const todos = [
  //     { id: 1, title: "todo1", completed: false },
  //     { id: 2, title: "todo2", completed: false },
  //     { id: 3, title: "todo3", completed: true },
  //     { id: 4, title: "todo4", completed: false },
  //     { id: 5, title: "todo5", completed: false },
  //   ];
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          deleteHandler={() => deleteHandler(todo.id)}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
