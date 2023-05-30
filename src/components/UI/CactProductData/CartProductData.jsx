import QuantityBlock from "../QuantityBlock/QuantityBlock";
import { FaRubleSign } from "react-icons/fa";

function CartProductData({ product, setQuantity, price }) {
  return (
    <div>
      <h2 className="text-sm font-bold">{product.title}</h2>
      <QuantityBlock quantity={product.quantity} setQuantity={setQuantity} />
      <div className="mt-2">
        {price > 0 ? (
          <>
            Итог: {price} <FaRubleSign className="inline" />
          </>
        ) : (
          <>-</>
        )}
      </div>
    </div>
  );
}

export default CartProductData;
