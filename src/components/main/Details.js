import React from "react";
import DetailCards from "./DetailCards";
import "../../sass/Details.scss";

const Details = ({ details, handleDetails, handleClear, showCards }) => {
  const { name, hexCode } = details;

  return (
    <div className="details">
      <div className="details__card--container">
        <div
          className="details__card--color"
          style={{ backgroundColor: hexCode }}
        />
        <div className="details__card--label">
          <h4>{name}</h4>
          <span>{hexCode}</span>
        </div>
      </div>
      <DetailCards handleDetails={handleDetails} showCards={showCards} />
      <button className="details__button--clear" onClick={() => handleClear()}>
        Clear
      </button>
    </div>
  );
};

export default Details;