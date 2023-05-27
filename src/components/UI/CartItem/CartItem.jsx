import { useEffect, useState } from "react";
import { FaRubleSign, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartItem({ product, className, removeCurrent }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(quantity * product.data.price);

  useEffect(() => {
    setPrice(quantity * product.data.price);
  }, [quantity]);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity - 1 < 1) removeCurrent(product);
    setQuantity(quantity - 1);
  }

  function changeHandler(value) {
    if (value === "") {
      setQuantity(value);
      return;
    }
    const newValue = parseInt(value);
    if (Number.isNaN(newValue)) return;
    if (newValue > 1000) return;
    if (newValue <= 0) {
      removeCurrent(product);
    }
    setQuantity(parseInt(value));
  }
  return (
    <li
      className={[
        className,
        "max-w-screen-sm w-11/12 h-32 flex bg-slate-50 dark:bg-slate-500",
        "hover:bg-slate-200 hover:dark:bg-slate-800",
        "overflow-hidden rounded-md drop-shadow-lg",
      ].join(" ")}
    >
      <Link className="h-full w-32 min-w-max" to={"/products/" + product?.id}>
        <img className="h-full w-full rounded-md" src={product?.photo} alt="" />
      </Link>
      <div className="flex flex-col w-full justify-center mx-4">
        <h2 className="text-sm font-bold">{product.data.title}</h2>
        <div className="flex justify-between">
          <div>
            <div className="flex w-28 justify-between mt-2">
              <button
                className="h-8 w-8 text-center bg-zinc-300 dark:bg-slate-600 rounded-md"
                onClick={() => decrement()}
              >
                -
              </button>
              <input
                className="h-8 w-8 text-center bg-zinc-200 dark:bg-slate-400 rounded-md"
                type="text"
                onChange={(e) => changeHandler(e.target.value)}
                value={quantity}
              />
              <button
                className="h-8 w-8 text-center bg-zinc-300 dark:bg-slate-600 rounded-md"
                onClick={() => increment()}
              >
                +
              </button>
            </div>
            <div className="mt-2">
              {price > 0 ?<> Итог: {price} <FaRubleSign className="inline" /> </> : <>-</>}
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <button
              className="h-8 w-8 bg-zinc-300 dark:bg-slate-600 rounded-md"
              onClick={() => removeCurrent(product)}
            >
              <FaTrashAlt className="m-auto" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
