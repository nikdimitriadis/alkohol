// import { useParams } from "react-router-dom";
// import React, { useContext } from "react";
// import FetchContext from "../fetch-data/fetch-data";

// const CocktailDetails = () => {
//   const ctx = useContext(FetchContext);
//   const allDrinks = ctx.allData;
//   console.log(allDrinks);

//   const params = useParams();
//   console.log(params);

//   const oneItem = allDrinks.filter((item) => {
//     return item.strDrink === params.nameID;
//   });

//   const lastItem = ctx.oneName;

//   return (
//     <div>
//       {/* <img src={lastItem[0].strDrinkThumb} alt={lastItem[0].strDrink} /> */}
//       {/* <p>{lastItem[0].strInstructions}</p> */}
//     </div>
//   );
// };

// export default CocktailDetails;
