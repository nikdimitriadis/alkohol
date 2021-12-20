import { Link, Routes } from "react-router-dom";
import React, { useContext, useCallback, useEffect, useState } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Items = (props) => {
  const [click, setClick] = useState(false);
  const { items } = props;
  const ctx = useContext(FetchContext);
  // console.log(items);

  const oneItem = (strDrink) => () => {
    ctx.oneItem(strDrink);
    console.log(strDrink);
    setClick((prev) => !prev);
  };

  console.log(click);

  return (
    <>
      {/* <Link to={`${items.strDrink}`}> */}
      <div onClick={oneItem(items.strDrink)}>
        <img src={items.strDrinkThumb} alt={items.strDrink} />
        <p>{items.strDrink}</p>
      </div>
      {/* </Link> */}
    </>
  );
};

export default Items;
