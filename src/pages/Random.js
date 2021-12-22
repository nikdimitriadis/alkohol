import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import Modal from "../components/Modal/Modal";

const Random = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStrDrink, setSelectedStrDrink] = useState("");

  const params = useParams();
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
    <>
      {isLoading && <div>loading</div>}
      {showModal && (
        <Modal closeModalFn={handleToggleModal} strDrink={selectedStrDrink} />
      )}

      {Object.keys(dataFromApi)?.map((key) => (
        <div
          key={key}
          onClick={handleToggleModal.bind(null, dataFromApi[key].strDrink)}
        >
          {dataFromApi[key].strDrink}
        </div>
      ))}
    </>
  );
};

export default Random;
