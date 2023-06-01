import { useEffect, useState } from "react";
import CartItem from "../components/UI/CartItem/CartItem";
import { FaRubleSign } from "react-icons/fa";
import Button from "../components/UI/Button/Button";

function CartPage({ cartList, removeFromCart, updateCartList, clearCartList }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cartList.map((product) => {
      price += product.quantity * product.price;
      return null;
    });
    setTotalPrice(price);
  }, [cartList]);

  function orderButtonHandler() {
    let orderList = [];
    cartList.forEach((product) =>
      orderList.push({ _id: product._id, quantity: product.quantity })
    );
    let orderObj = Object();
    orderObj.orderPositions = orderList;
    orderObj.totalPrice = totalPrice;
    orderObj.orderDate = new Date().toJSON();
    window.alert(JSON.stringify(orderObj, null, 1));
    clearCartList();
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center py-5">
        <h2 className="mb-5 text-4xl font-bold">Корзина</h2>
        <ul className="w-full flex flex-col items-center justify-center">
          {cartList?.length !== 0 ? (
            cartList.map((product) => (
              <CartItem
                className="my-3"
                product={product}
                key={product.id}
                removeCurrent={removeFromCart}
                updateProduct={updateCartList}
              />
            ))
          ) : (
            <div>
              <p>В корзине пока ничего нет</p>
            </div>
          )}
        </ul>
        {cartList?.length !== 0 ? (
          <div className="flex flex-col my-5">
            <div className="text-xl font-bold">
              Итоговая стоимость: {totalPrice}
              <FaRubleSign className="inline" />
            </div>
            <Button
              className={
                "h-10 w-4/5 mt-3 mx-auto bg-zinc-300 dark:bg-slate-700"
              }
              onClick={orderButtonHandler}
            >
              Заказать
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartPage;
