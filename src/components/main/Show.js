import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "../../sass/Main.scss";

const Show = ({ colors, colorChoice, handleDetails }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showColors, setShowColors] = useState([]);

  const perPage = 18;
  const maxPage = Math.ceil(showColors.length / perPage);

  const paginate = (current) => setCurrentPage(current);
  const nextPage = () =>
    currentPage < maxPage && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const idxOfLastColor = currentPage * perPage;
  const idxOfFirstColor = idxOfLastColor - perPage;
  const currentColors = showColors.slice(idxOfFirstColor, idxOfLastColor);

  useEffect(() => {
    if (colorChoice?.length > 0) {
      setShowColors(colorChoice);
    } else {
      setShowColors(colors);
    }
  }, [colorChoice, colors]);

  if (currentColors?.length > 0) {
    return (
      <div className="main__colors">
        <ul className="card__ul">
          {currentColors.map((each) => (
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
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxPage={maxPage}
        />
      </div>
    );
  } else {
    return <div>{prevPage()}loading...</div>;
  }
};

export default Show;
