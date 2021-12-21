<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import useFetch from "../components/hooks/useFetch";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [submited, setSubmited] = useState(false);

  //   async function testFetch(name) {
  //     console.log(name);
  //     try {
  //       const response = await fetch(
  //         `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //     } catch (err) {
  //       // setIsLoaded(true);
  //       // setError(error);
  //       // console.error(err);
  //     }
  //   }

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue("");
    // testFetch(searchValue);
    // setSubmited((prev) => !prev);
  };

  //   console.log(submited);
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
      <form onSubmit={submitHandler}>
        <input value={searchValue} type="text" onChange={changeHandler} />
        <Link to={`/search/${searchValue}`}>
          <input className="button" type="submit" />
        </Link>
        <Outlet />
        {/* {'dinamiko message'} */}
      </form>
    </header>
  );
};

export default Header;
=======
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="headerFooter">
            <nav className='Navi'>
                <p className="fontPlayfair">DRINKS&CHILL</p>
                <Link to="/">MENU</Link>
            </nav>
            <article>
                <h1 className="fontPlayfair">Cocktails & Getränke</h1>
                <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
                <div>
                    <input type="text" name="" id="" placeholder='type something' />
                    <input className="button" type="button" value="SEARCH" />
                </div>
            </article>
        </header>
    );
}

export default Header;
>>>>>>> 84c5d62144525e26ad33ab9954966bc179dd4e01
