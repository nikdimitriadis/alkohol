import useFetch from "../hooks/useFetch";

const Modal = ({ strDrink, closeModalFn }) => {
  const { data } = useFetch(
    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );

  if (!data) {
    return null;
  }
  const { drinks } = data;
  const lastObj = drinks[0];
  const ingredients = [];
  const measures = [];

  for (let key in lastObj) {
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
    return <p key={index}>{item[index]}</p>;
  });

  return (
    <section className="ingredients popUp">
      <p onClick={closeModalFn} className="close">
        close
      </p>
      <article>
        <img src={lastObj.strDrinkThumb} alt={lastObj.strDrink} />
        <div>
          <h2 className="fontPlayfair">{lastObj.strDrink}</h2>
          <h3>Zutaten</h3>
          {content}
          {/*  <p>{lastObj.strMeasure1}{lastObj.strIngredient1} </p> */}
          <p className="description"> {lastObj.strInstructionsDE}</p>
        </div>
      </article>
    </section>
  );
};

export default Modal;
