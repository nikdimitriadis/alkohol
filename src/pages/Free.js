import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Free = () => {
  const ctx = useContext(FetchContext);

  const frees = ctx.free;
  console.log(frees);

  return <div></div>;
};

export default Free;
