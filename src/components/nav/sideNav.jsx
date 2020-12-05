import React from "react";

const SideNav = ({ handleColor, handleDetails }) => {
  return (
    <nav className="sideNav__background">
      <button className="sideNav__button" onClick={() => handleDetails("Random")}>
        <span>Random Color</span>
      </button>
      <div className="sideNav__links">
        <ul>
          <li className="sideNav__links--color">
            <span className="Red" onClick={() => handleColor("Red")}>
              Red
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Orange" onClick={() => handleColor("Orange")}>
              Orange
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Yellow" onClick={() => handleColor("Yellow")}>
              Yellow
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Green" onClick={() => handleColor("Green")}>
              Green
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Blue" onClick={() => handleColor("Blue")}>
              Blue
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Purple" onClick={() => handleColor("Purple")}>
              Purple
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Brown" onClick={() => handleColor("Brown")}>
              Brown
            </span>
          </li>
          <li className="sideNav__links--color">
            <span className="Gray" onClick={() => handleColor("Gray")}>
              Gray
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;