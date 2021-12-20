import useFetch from "../hooks/useFetch";

const Modal = ({ strDrink, closeModalFn }) => {
  const { data, isLoading } = useFetch(
    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );

  if (!data) {
    return null;
  }
  const { drinks } = data;
  console.log(drinks);
  return (
    <div>
      <div onClick={closeModalFn}>close</div>
      {drinks[0].strDrink}
    </div>
  );
};

export default Modal;
