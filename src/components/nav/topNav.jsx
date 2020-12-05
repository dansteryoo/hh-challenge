import React from "react";
import '../../sass/Nav.scss'

const NavTop = ({ search, setSearch, handleSearch }) => {
  return (
    <nav className="topNav__background">
      <div className="topNav__left">
        <a href="http://www.helpfulhuman.com/" rel="noreferrer" target="_blank">
          <img src="logo-symbol.svg" alt="logo" />
        </a>
      </div>
      <div className="topNav__right">
        <form onSubmit={handleSearch}>
          <input
            className="topNav__right--input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};


export default NavTop;