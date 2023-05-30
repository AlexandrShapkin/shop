import CartProductData from "../CactProductData/CartProductData";
import RemoveFromCartButton from "../RemoveFromCartButton/RemoveFromCartButton";

function CartProductContent({product, price, setQuantity, removeCurrent}) {
  return (
    <div className="flex flex-col w-full justify-center mx-4">
      <div className="flex justify-between">
        <CartProductData
          product={product}
          setQuantity={setQuantity}
          price={price}
        />
        <RemoveFromCartButton product={product} removeCurrent={removeCurrent} />
      </div>
    </div>
  );
}

export default CartProductContent;
