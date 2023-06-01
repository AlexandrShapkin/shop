import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../ProductImage/ProductImage";
import CartProductContent from "../CartProductContent/CartProductContent";


function CartItem({ product, className, removeCurrent, updateProduct }) {
  const [price, setPrice] = useState(product.quantity * product.price);
  function setQuantity(quantity) {
    updateProduct({ ...product, quantity: quantity });
  }

  useEffect(() => {
    setPrice(product.quantity * product.price);
  }, [product]);



  return (
    <li
      className={[
        className,
        "max-w-screen-sm w-11/12 h-32 flex bg-slate-50 dark:bg-slate-500",
        "hover:bg-slate-200 hover:dark:bg-slate-800",
        "overflow-hidden rounded-md drop-shadow-lg",
      ].join(" ")}
    >
      <Link className="h-full w-32 min-w-max" to={"/products/" + product.id}>
        <ProductImage
          image={product?.photo}
          className={"h-full w-full rounded-md"}
        />
      </Link>
      <CartProductContent
        product={product}
        price={price}
        setQuantity={setQuantity}
        removeCurrent={removeCurrent}
      />
    </li>
  );
}

export default CartItem;