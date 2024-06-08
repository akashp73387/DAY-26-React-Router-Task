import React from "react";
import Card from "../Components/Card";

const CyberSecurity = ({ data }) => {
  let cs = data.filter((ele) => ele.content === "Cyber Security");
  return (
    <>
      <div className="container">
        <div className="row">
          {cs.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
<h1>Cyber Security</h1>;
