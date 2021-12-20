import React, { useContext } from "react";
import FetchContext from "../fetch-data/fetch-data";
import Items from "../components/Items";

const Gin = () => {
  const ctx = useContext(FetchContext);

  const gins = ctx.gin;
  console.log(gins);

  return (
    <div>
      {gins.map((gin) => {
        return <Items items={gin} key={Math.random().toString()} />;
      })}
    </div>
  );
};

export default Gin;
