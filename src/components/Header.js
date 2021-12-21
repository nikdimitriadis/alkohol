import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = () => {
    console.log("submit");
    setSearchValue("");
    // e.preventDefault();
  };

  const changeHandler = (e) => {
    setSearchValue(() => e.target.value);
  };

  return (
    <header className="headerFooter">
      <nav>
        <p className="fontPlayfair">DRINKS&CHILL</p>
        <Link to="/">MENU</Link>
      </nav>
      <h1 className="fontPlayfair">Cocktails & Getränke</h1>
      <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
      <form>
        <input value={searchValue} type="text" onChange={changeHandler} />
        <Link to={`/search/${searchValue}`} onClick={submitHandler}>
          <input className="button" type="submit" />
        </Link>
        <Outlet />
        {/* {'dinamiko message'} */}
      </form>
    </header>
  );
};

export default Header;
