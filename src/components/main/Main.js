import React, { useEffect, useState } from "react";
import TopNav from "../nav/topNav";
import SideNav from "../nav/sideNav";
import Show from "./Show";
import Details from "./Details";
import AllColors from "../../colors.json";
import "../../sass/Main.scss";

const Main = () => {
  const [colors, setColors] = useState([]);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showCards, setShowCards] = useState([]);
  const [colorChoice, setColorChoice] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (AllColors) {
      setColors(AllColors);
    }
  }, []);

  const handleDetails = (name, hexCode = null) => {
    const newColors = filterCards();
    setShowDetails(true);
    setShowCards(newColors);

    if (name === "Random") {
      setDetails({
        name: newColors[2].name,
        hexCode: newColors[2].hexCode,
      });
    } else {
      setDetails({ name, hexCode });
    }

    function filterCards() {
      let index = colors.findIndex((obj) => obj.name === name);
      if (name === "Random") {
        index = Math.random() * colors.length;
      }
      let start = index - 2;
      let end = index + 3;

      if (index < 2) {
        start = 0;
        end = 5;
      } else if (index > colors.length) {
        start = colors.length - 5;
        end = colors.length;
      }

      return colors.slice(start, end);
    }
  };

  const handleColor = (choice) => {
    let colorChoice = [];

    for (let color of colors) {
      const colorsName = color.name.toLowerCase();
      const choiceName = choice.toLowerCase();
      if (colorsName.includes(choiceName)) colorChoice.push(color);
    }
    
    setShowDetails(false);
    setColorChoice(colorChoice);
  };

  const handleClear = () => {
    setShowDetails(false);
    setColorChoice([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowDetails(false);

    const searchRegexMatch = (search) => {
      const input = Array.from(search).reduce(
        (a, v, i) => `${a}[^${search.substring(i)}]*?${v}`,
        ""
      );
      return new RegExp(input);
    };

    const searchData = searchRegexMatch(search.toLowerCase());
    const searchColors = colors.filter((each) => {
      let hexCode = each.hexCode.toLowerCase().match(searchData);
      let name = each.name.toLowerCase().match(searchData);

      return hexCode || name;
    });

    return setColorChoice(searchColors);
  };

  return (
    <div className="main">
      <TopNav
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className="main__middle">
        <SideNav handleColor={handleColor} handleDetails={handleDetails} />
        {showDetails ? (
          <>
            <Details
              details={details}
              handleDetails={handleDetails}
              handleClear={handleClear}
              showCards={showCards}
            />
          </>
        ) : (
          <Show
            colors={colors}
            colorChoice={colorChoice}
            handleDetails={handleDetails}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
