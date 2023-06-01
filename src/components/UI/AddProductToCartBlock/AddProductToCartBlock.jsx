import { useState } from "react";
import QuantityBlock from "../QuantityBlock/QuantityBlock";
import Button from "../Button/Button";

import { FaCartPlus } from "react-icons/fa";
import { GoX, GoCheck } from "react-icons/go";

function AddProductToCartBlock({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  function addButtonHandler() {
  }

  const DEFAULT_ADD_TEXT = <div>Добавить <FaCartPlus className="m-auto inline" /></div>;
  const EVENT_ADD_TEXT = <div className="text-green-300">Добавлено <GoCheck className="m-auto inline" /></div>;
  const ERROR_ADD_TEXT = <div className="text-red-300">Ошибка <GoX className="m-auto inline" /></div>;
  const [addToCartText, setAddToCartText] = useState(DEFAULT_ADD_TEXT);

  function clickAddButtonHandler() {
    if (quantity === "") {
      setAddToCartText(ERROR_ADD_TEXT);
      setTimeout(() => {setAddToCartText(DEFAULT_ADD_TEXT);}, [500]);
      return;
    }
    setAddToCartText(EVENT_ADD_TEXT);
    setTimeout(() => {setAddToCartText(DEFAULT_ADD_TEXT); addToCart(product)}, [500]);
  }

  return (
    <div className="flex justify-between mt-0 sm:my-5 w-full sm:w-80">
      <QuantityBlock quantity={quantity} setQuantity={setQuantity} />
      <div className="flex justify-between mt-2">
        <Button
          className="h-8 px-2 text-center bg-zinc-300 dark:bg-slate-700 rounded-md"
          onClick={() => clickAddButtonHandler()}
        >
          {addToCartText}
        </Button>
      </div>
    </div>
  );
}

export default AddProductToCartBlock;
