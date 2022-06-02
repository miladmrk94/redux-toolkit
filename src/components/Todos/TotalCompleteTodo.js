import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const { data } = useSelector((state) => state.todo);
  const totalComplete = data.filter((i) => {
    return i.completed === true;
  });

  return (
    <>
      <h3 className="mt-3"> Total Complete Item : {totalComplete.length}</h3>
    </>
  );
};

export default TotalCompleteItems;
