import React from "react";

function Card({ name, image }) {
  return (
    <div className="App-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default Card;
