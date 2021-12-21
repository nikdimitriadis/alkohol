import React, { useState, useEffect, useCallback } from "react";

const FetchContext = React.createContext({
  error: null,
  isLoaded: false,
  gin: [],
  vodka: [],
  rum: [],
  scotch: [],
  free: [],
  random: [],
  allData: [],
  oneItem: () => {},
  oneName: [],
});

export const FetchContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gin, setGin] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [rum, setRum] = useState([]);
  const [scotch, setScotch] = useState([]);
  const [free, setFree] = useState([]);
  const [random, setRandom] = useState([]);
  const [cocktailName, setCocktailName] = useState("");

  // console.log("trexw");

  async function giveGin() {
    // console.log("trexw");
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      //   console.log(data);
      setGin(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  async function giveVodka() {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setVodka(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  async function giveRum() {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setRum(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  async function giveScotch() {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=scotch`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setScotch(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  async function giveAlkFree() {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setFree(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  async function giveAlkRandom() {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setRandom(data.drinks);
    } catch (err) {
      setIsLoaded(true);
      setError(error);
      console.error(err);
    }

    setIsLoaded(false);
  }

  //   console.log(gin);
  //   console.log(vodka);
  //   console.log(rum);
  //   console.log(scotch);
  //   console.log(free);
  //   console.log(random);

  //   one item
  async function oneDrink(string) {
    try {
      const response = await fetch(
        ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${string}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setCocktailName(data.drinks);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    giveGin();
    giveVodka();
    giveRum();
    giveScotch();
    giveAlkFree();
    giveAlkRandom();
  }, []);

  return (
    <FetchContext.Provider
      value={{
        error: error,
        isLoaded: isLoaded,
        gin: gin,
        vodka: vodka,
        rum: rum,
        scotch: scotch,
        free: free,
        random: random,
        allData: [...gin, ...vodka, ...rum, ...scotch, ...free],
        oneItem: oneDrink,
        oneName: cocktailName,
      }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
