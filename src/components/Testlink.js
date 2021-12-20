import { Link } from "react-router-dom";
import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Testlink = () => {
  //   const ctx = useContext(FetchContext);

  return (
    <ul>
      <Link to="gin">
        <li>gin</li>
      </Link>

      <Link to="vodka">
        <li>vodka</li>
      </Link>

      <Link to="rum">
        <li>rum</li>
      </Link>

      <Link to="scotch">
        <li>scotch</li>
      </Link>

      <Link to="alkFree">
        <li>alkFree</li>
      </Link>

      <Link to="random">
        <li>random</li>
      </Link>
    </ul>
  );
};

export default Testlink;
