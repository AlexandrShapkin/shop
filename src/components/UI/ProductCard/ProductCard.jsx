import { FaCartPlus, FaRubleSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductImage from "../../ProductImage/ProductImage";

function ProductCard({ product, className, addToCart }) {
  return (
    <div
      className={[
        className,
        "w-full sm:w-40 overflow-hidden rounded-md drop-shadow-lg hover:bg-slate-200 hover:dark:bg-slate-800 bg-slate-50 dark:bg-slate-500",
      ].join(" ")}
    >
      <figure className="">
        <button
          className="absolute rounded-md bg-red-600 w-8 h-8 sm:w-6 sm:h-6 right-4 top-4 sm:right-2 sm:top-2"
          onClick={() => addToCart(product)}
        >
          <FaCartPlus className="m-auto" />
        </button>
        <Link to={"/products/" + product?.id}>
          <ProductImage photoBase64={product?.photo} />
          <figcaption className="p-3 flex justify-between h-22 sm:h-28 flex-col">
            <h3 className="text-sm">{product?.data.title}</h3>
            <div className="text-xs flex justify-between mt-2 text-zinc-500 dark:text-zinc-200">
              <p>
                {product?.data.price}
                <FaRubleSign className="inline" />
              </p>
              <p>{product?.data.weight}</p>
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
}

export default ProductCard;
