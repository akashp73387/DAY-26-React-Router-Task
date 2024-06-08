import React from "react";
import Card from "../Components/Card";

const FullStackDevelopment = ({ data }) => {
  let fsd = data.filter((ele) => ele.content === "Full Stack Development");
  return (
    <>
      <div className="container">
        <div className="row">
          {fsd.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FullStackDevelopment;
