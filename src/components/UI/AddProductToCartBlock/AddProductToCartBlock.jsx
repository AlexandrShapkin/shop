import { useState } from "react";
import QuantityBlock from "../QuantityBlock/QuantityBlock";
import Button from "../Button/Button";

import { FaCartPlus } from "react-icons/fa";

function AddProductToCartBlock({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  function addButtonHandler() {
    if (quantity === "") {
      return;
    }
    addToCart(product, quantity);
  }

  return (
    <div className="flex justify-between mt-0 sm:my-5 w-full sm:w-80">
      <QuantityBlock quantity={quantity} setQuantity={setQuantity} />
      <div className="flex justify-between mt-2">
        <Button
          className="h-8 px-2 text-center bg-zinc-300 dark:bg-slate-700 rounded-md"
          onClick={() => addButtonHandler()}
        >
          Добавить <FaCartPlus className="inline" />
        </Button>
      </div>
    </div>
  );
}

export default AddProductToCartBlock;
