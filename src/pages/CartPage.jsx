import CartItem from "../components/UI/CartItem/CartItem";

function CartPage({ cartList, removeFromCart, updateCartList }) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center py-5">
        <h2 className="mb-5 text-4xl font-bold">Корзина</h2>
        <ul className="w-full flex flex-col items-center justify-center">
          {cartList ? (
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
      </div>
    </div>
  );
}

export default CartPage;
