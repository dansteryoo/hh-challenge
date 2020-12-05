import React from "react";
import Card from "./Card";
import "../../sass/Details.scss";

const DetailCards = ({ handleDetails, showCards }) => {

  return (
    <div className="details__bottom--container">
      <ul className="card__ul">
        {showCards.map((each) => (
          <Card
            key={each.id}
            hexCode={each.hexCode}
            name={each.name}
            redDecimal={each.redDecimal}
            greenDecimal={each.greenDecimal}
            blueDecimal={each.blueDecimal}
            handleDetails={handleDetails}
          />
        ))}
      </ul>
    </div>
  );
};

export default DetailCards;
