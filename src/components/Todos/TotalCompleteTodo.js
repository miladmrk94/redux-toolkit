import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const { data } = useSelector((state) => state.todo);

  return (
    <>
      <h3 className="mt-3"> Total Complete Item :{data.length} </h3>
    </>
  );
};

export default TotalCompleteItems;
