import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Scotch = () => {
  const ctx = useContext(FetchContext);

  const scotchs = ctx.scotch;
  console.log(scotchs);

  return <div></div>;
};

export default Scotch;
