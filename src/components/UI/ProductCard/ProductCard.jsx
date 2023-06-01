import { FaCartPlus, FaRubleSign } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { Link } from "react-router-dom";
import ProductImage from "../../ProductImage/ProductImage";
import Button from "../Button/Button";
import { useState } from "react";

function ProductCard({ product, className, addToCart }) {
  const DEFAULT_ADD_ICON = <FaCartPlus className="m-auto" />;
  const EVENT_ADD_ICON = <GoCheck className="m-auto text-green-300" />;
  const [addToCartButtonIcon, setAddToCartButtonIcon] = useState(DEFAULT_ADD_ICON);

  function clickAddButtonHandler() {
    setAddToCartButtonIcon(EVENT_ADD_ICON);
    setTimeout(() => {setAddToCartButtonIcon(DEFAULT_ADD_ICON); addToCart(product)}, [500]);
  }

  return (
    <div
      className={[
        className,
        "w-full sm:w-40 overflow-hidden rounded-md drop-shadow-lg hover:bg-slate-200 hover:dark:bg-slate-800 bg-slate-50 dark:bg-slate-500",
      ].join(" ")}
    >
      <figure className="">
        <Button
          className="absolute rounded-md bg-zinc-300 w-8 h-8 sm:w-6 sm:h-6 right-4 top-4 sm:right-2 sm:top-2"
          onClick={() => {clickAddButtonHandler()}}
        >
          {addToCartButtonIcon}
        </Button>
        <Link to={"/products/" + product?._id}>
          <ProductImage image={product?.photo} />
          <figcaption className="p-3 flex justify-between h-22 sm:h-28 flex-col">
            <h3 className="text-sm">{product?.title}</h3>
            <div className="text-xs flex justify-between mt-2 text-zinc-500 dark:text-zinc-200">
              <p>
                {product?.price}
                <FaRubleSign className="inline" />
              </p>
              <p>{product?.weight}</p>
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
}

export default ProductCard;
