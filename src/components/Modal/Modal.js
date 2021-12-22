import useFetch from "../hooks/useFetch";

const Modal = ({ strDrink, closeModalFn }) => {
  const { data, isLoading } = useFetch(
    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );

  if (!data) {
    return null;
  }
  const { drinks } = data;
  console.log(drinks[0]);
  return (
    <section className='ingredients'>
      <p onClick={closeModalFn} className='close'>close</p>
      <article>
        <img src={drinks[0].strDrinkThumb} alt={drinks[0].strDrink} />
        <div>
          <h2 className="fontPlayfair">{drinks[0].strDrink}</h2>
          <h3>Zutaten</h3>
          <p>{drinks[0].strMeasure1}{drinks[0].strIngredient1} </p>
          <p>{drinks[0].strMeasure2}{drinks[0].strIngredient2} </p>
          <p>{drinks[0].strMeasure3}{drinks[0].strIngredient3} </p>
          <p>{drinks[0].strMeasure4}{drinks[0].strIngredient4} </p>
          <p>{drinks[0].strMeasure5}{drinks[0].strIngredient5} </p>
          <p>{drinks[0].strMeasure6}{drinks[0].strIngredient6} </p>

          <p className='description'> {drinks[0].strInstructionsDE}</p>
        </div>
      </article>
    </section>
  );
};

export default Modal;


