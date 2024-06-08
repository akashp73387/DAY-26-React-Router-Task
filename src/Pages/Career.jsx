import React from "react";
import Card from "../Components/Card";

const Carrer = ({ data }) => {
  let carrer = data.filter((ele) => ele.content === "Career");
  return (
    <>
      <div className="container">
        <div className="row">
          {carrer.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Carrer;
