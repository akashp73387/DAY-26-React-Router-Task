import React from "react";
import Card from "../Components/Card";

const All = ({ data }) => {
  //let allData=data.map((element,index))
  //console.log(data.id);
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default All;
