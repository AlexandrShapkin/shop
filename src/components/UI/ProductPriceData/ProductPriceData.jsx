import { FaRubleSign } from "react-icons/fa";

function ProductPriceData({price}) {
  return (
    <div className="flex justify-between">
    <p>Цена:</p>
    <p className="whitespace-nowrap">
      {price}
      <FaRubleSign className="inline" />
    </p>
  </div>
  );
}

export default ProductPriceData;