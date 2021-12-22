import { useState } from "react";
// import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import Modal from "../components/Modal/Modal";

const Random = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStrDrink, setSelectedStrDrink] = useState("");

  // const params = useParams();
  const { data, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );

  const dataFromApi = data?.drinks ?? {};

  const handleToggleModal = (strDrink = "") => {
    setShowModal((old) => !old);
    setSelectedStrDrink(() => strDrink);
  };

  console.log(dataFromApi);

  return (
    <section className="ingredients">
      {isLoading && <div>loading</div>}
      {showModal && (
        <Modal closeModalFn={handleToggleModal} strDrink={selectedStrDrink} />
      )}

      {Object.keys(dataFromApi)?.map((key) => (
        <article
          className={`${"overview"} ${`
        style${Math.floor((key % 6) + 1)}`}`}

          // key={key}
          // onClick={handleToggleModal.bind(null, dataFromApi[key].strDrink)}
        >
          {" "}
          {/* <img src={dataFromApi[key].strDrinkThumb} alt={dataFromApi[key].strDrink} />
          <h2>{dataFromApi[key].strDrink}</h2> */}
          <img
            src={dataFromApi[key].strDrinkThumb}
            alt={dataFromApi[key].strDrink}
          />
          <div>
            <h2 className="fontPlayfair">{dataFromApi[key].strDrink}</h2>
            <h3>Zutaten</h3>
            <p>
              {dataFromApi[key].strMeasure1}
              {dataFromApi[key].strIngredient1}{" "}
            </p>
            <p>
              {dataFromApi[key].strMeasure2}
              {dataFromApi[key].strIngredient2}{" "}
            </p>
            <p>
              {dataFromApi[key].strMeasure3}
              {dataFromApi[key].strIngredient3}{" "}
            </p>
            <p>
              {dataFromApi[key].strMeasure4}
              {dataFromApi[key].strIngredient4}{" "}
            </p>
            <p>
              {dataFromApi[key].strMeasure5}
              {dataFromApi[key].strIngredient5}{" "}
            </p>
            <p>
              {dataFromApi[key].strMeasure6}
              {dataFromApi[key].strIngredient6}{" "}
            </p>

            <p className="description"> {dataFromApi[key].strInstructionsDE}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Random;
