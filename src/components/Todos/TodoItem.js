import React from "react";

const TodoItem = ({ id, title, completed, deleteHandler }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed}></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
