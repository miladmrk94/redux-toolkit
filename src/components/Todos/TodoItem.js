import React from "react";

const TodoItem = ({ title, completed, deleteHandler, checkHandler }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={checkHandler}
            checked={completed}
          />
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
