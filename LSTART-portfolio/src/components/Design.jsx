import React from "react";
import "../css/design.css";

function Design(props) {
  // Body
  return (
    <div className="card bg-dark text-white design-card">
      <div className="card-img-container">
        <img
          src={props.work}
          alt={`image of ${props.title}`}
          className="card-img img-fluid object-fit-cover"
        />
      </div>
      <div className="card-img-overlay">
        <div className="overlay-content text-center">
          <p className="card-title">{props.title}</p>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Design;
