import React from "react";

const Card = ({ name, hexCode, handleDetails }) => {
  return (
    <li
      className="card__li"
      style={{ backgroundColor: hexCode }}
      onClick={() => handleDetails(name, hexCode)}
    >
      <div className="card__label">
        <h4>{name}</h4>
        <p>{hexCode}</p>
      </div>
    </li>
  );
};

export default Card;
