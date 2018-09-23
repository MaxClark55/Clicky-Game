import React from "react";
import "./cards.css";

const cards = props => (
  <div className="col-md-2 col-sm-3 col-6">
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Cards;