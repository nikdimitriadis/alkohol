import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  const changeHandler = (e) => {
    setSearchValue(() => e.target.value);
  };

  return (
    <header className="headerFooter">
      <nav className='Navi'>
        <p className="fontPlayfair">DRINKS&CHILL</p>
        <Link to="/">HOME</Link>
      </nav>
      <article>
        <h1 className="fontPlayfair">Cocktails & Getränke</h1>
        <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
        <form onSubmit={submitHandler}>
          <input value={searchValue} type="text" placeholder='type something' onChange={changeHandler} />
          <Link to={`/search/${searchValue}`}>
            <input className="button" type="submit" />
          </Link>
          <Outlet />
          {/* {'dinamiko message'} */}
        </form>
      </article>
    </header>
  );
};

export default Header;
