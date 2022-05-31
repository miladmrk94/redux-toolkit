import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const { data } = useSelector((state) => state.todo);
  const completedTodo = data.filter((i) => {
    return i.completed === true;
  });

  return (
    <>
      <h3> Todal Complete Item : {completedTodo.length}</h3>
    </>
  );
};

export default TotalCompleteItems;
