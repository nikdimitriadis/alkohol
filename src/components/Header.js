import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (e) => {
    /*  e.preventDefault(); */
    setSearchValue("");
    // e.preventDefault();
  };

  const changeHandler = (e) => {
    setSearchValue(() => e.target.value);
  };

  return (
    <header className="headerFooter">
      <nav className="Navi">
        <p className="fontPlayfair">DRINKS&CHILL</p>
        <Link to="/">HOME</Link>
      </nav>
      <article>
        <h1 className="fontPlayfair">Cocktails & Getränke</h1>
        <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
        <form>
          <input value={searchValue} type="text" onChange={changeHandler} />
          <Link to={`/search/${searchValue}`} onClick={submitHandler}>
            <button className="button" type="submit">
              Suchen
            </button>
          </Link>
          <Outlet />
          {/* {'dinamiko message'} */}
        </form>
      </article>
    </header>
  );
};

export default Header;
