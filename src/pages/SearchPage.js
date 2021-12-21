import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import Modal from "../components/Modal/Modal";

const SearchPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStrDrink, setSelectedStrDrink] = useState("");
  const params = useParams();
  console.log(params);

  const { data, isLoading } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.drinks}`
  );

  const dataFromApi = data?.drinks ?? {};

  const handleToggleModal = (strDrink = "") => {
    setShowModal((old) => !old);
    setSelectedStrDrink(() => strDrink);
  };

  console.log(dataFromApi);
  return (
    <div>
      {isLoading && <div>loading</div>}
      {showModal && (
        <Modal closeModalFn={handleToggleModal} strDrink={selectedStrDrink} />
      )}
      {Object.keys(dataFromApi)?.map((key) => (
        <div
          key={key}
          onClick={handleToggleModal.bind(null, dataFromApi[key].strDrink)}
        >
          {" "}
          <img src={dataFromApi[key].strDrinkThumb} />
          <h1>{dataFromApi[key].strDrink}</h1>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
