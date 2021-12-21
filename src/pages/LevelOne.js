import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import Modal from "../components/Modal/Modal";
import Header from '../components/Header'
import Footer from '../components/Footer'

const LevelOne = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStrDrink, setSelectedStrDrink] = useState("");

  const params = useParams();
  const { data, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.category}`
  );

  const dataFromApi = data?.drinks ?? {};

  const handleToggleModal = (strDrink = "") => {
    setShowModal((old) => !old);
    setSelectedStrDrink(() => strDrink);
  };

  return (
    <>

      {isLoading && <div>loading</div>}
      {showModal && (
        <Modal closeModalFn={handleToggleModal} strDrink={selectedStrDrink} />
      )}
      {Object.keys(dataFromApi)?.map((key) => (
        <article
          key={key}
          onClick={handleToggleModal.bind(null, dataFromApi[key].strDrink)}
        >
          {" "}
          <img src={dataFromApi[key].strDrinkThumb} />
          <h2>{dataFromApi[key].strDrink}</h2>
        </article>
      ))}

    </>
  );
};
export default LevelOne;
