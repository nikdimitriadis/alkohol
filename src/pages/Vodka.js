import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";

const Vodka = () => {
  const ctx = useContext(FetchContext);

  const vodkas = ctx.vodka;
  console.log(vodkas);

  return <div></div>;
};

export default Vodka;
