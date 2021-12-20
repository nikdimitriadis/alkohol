import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Rum = () => {
  const ctx = useContext(FetchContext);

  const rums = ctx.rum;
  console.log(rums);

  return <div></div>;
};

export default Rum;
