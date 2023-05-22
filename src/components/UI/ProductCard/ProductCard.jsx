import { FaRubleSign } from "react-icons/fa";

function ProductCard({ photo, productData }) {
  return (
    <div className="w-28 sm:w-40 overflow-hidden rounded-md drop-shadow-lg bg-slate-50 dark:bg-slate-500">
      <figure className="hover:bg-slate-200 hover:dark:bg-slate-800">
        <a href="#">
          <img
            src={photo}
            alt=""
            className="object-scale-down object-center"
          />
          <figcaption className="p-3">
            <h3 className="text-sm">{productData?.title}</h3>
            <div className="text-xs flex justify-between mt-2 text-zinc-500 dark:text-zinc-200">
              <p>
                {productData?.price}
                <FaRubleSign className="inline" />
              </p>
              <p>{productData?.weight}</p>
            </div>
          </figcaption>
        </a>
      </figure>
    </div>
  );
}

export default ProductCard;
