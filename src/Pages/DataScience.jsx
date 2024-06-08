import React from "react";
import Card from "../Components/Card";

const DataScience = ({ data }) => {
  let ds = data.filter((ele) => ele.content === "Data Science");
  return (
    <>
      <div className="container">
        <div className="row">
          {ds.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DataScience;
