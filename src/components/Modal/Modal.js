import useFetch from "../hooks/useFetch";

const Modal = ({ strDrink, closeModalFn }) => {
  const { data, isLoading } = useFetch(
    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );

  if (!data) {
    return null;
  }
  const { drinks } = data;

  const lastObj = drinks[0];

  const ingredients = [];
  const measures = [];

  let number = 0;
  for (let key in lastObj) {
    number++;
    if (lastObj[key] != null) {
      if (key.startsWith("strIngredient")) {
        ingredients.push(lastObj[key]);
      }

      if (key.startsWith("strMeasure")) {
        measures.push(lastObj[key]);
      }
    }
  }
  const all = ingredients.map((item, index) => {
    return {
      [index]: `${item} ${measures[index]}`,
    };
  });
  const content = all.map((item, index) => {
    return (
      <p style={{ color: "red" }} key={index}>
        {item[index]}
      </p>
    );
  });

  return (
    <div>
      <div onClick={closeModalFn}>close</div>
      {lastObj.strDrink}
      {<img src={lastObj.strDrinkThumb} />}
      {content}
    </div>
  );
};

export default Modal;
