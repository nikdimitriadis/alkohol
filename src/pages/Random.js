import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Random = () => {
  const ctx = useContext(FetchContext);

  const randoms = ctx.random;
  console.log(randoms);

  return <div></div>;
};

export default Random;
