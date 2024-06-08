import React from "react";
import "../Components/Card.css";

function Card({ element, index }) {
  return (
    <>
      <div
        className="col col-lg-4 col-md-4 col-sm-6 col-12 mt-5 mb-2 g-5"
        key={index}
      >
        <div className="card h-100">
          <img
            src={element.img}
            className="card-img-top image-with-box-shadow"
            height="200"
            alt="..."
          />
          <div className="card-body px-4 py-3">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <p className="card-read">Read more »</p>
          </div>
          <div className="card-footer d-flex ">
            <small className="custom-card-footer px-2 ">
              {element.date}
              <small className="custom-card-footer px-4 ms-5">
                📪No Comments
              </small>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
