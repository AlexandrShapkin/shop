import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./Layout";

import ProductsListPage from "./pages/ProductsListPage";
import ProductPage from "./pages/ProductPage";
import VacanciesPage from "./pages/VacanciesPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

import { fetchProductsData } from "./utils/fetchData";
import { productDummyObject } from "./utils/productDummy";

import "./App.css";

const NOT_FOUND = -1;



function App() {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([productDummyObject]);

  useEffect(() => {
    // fetchProductsData().then(productsData => {
    //   setProducts(productsData);
    // });
  }, []);

  function makeCartObject(product, quantity = 1) {
    let obj = new Object();
    obj.id = product.id;
    obj.photo = product.photo;
    obj.title = product.data.title;
    obj.price = product.data.price;
    obj.quantity = quantity;
  
    return obj;
  }

  function indexInCart(product) {
    for (let i = 0; i < cartList.length; i++) {
      if (product.id === cartList[i].id) return i;
    }
    return NOT_FOUND;
  }

  function addToCart(product, quantity = 1) {
    const index = indexInCart(product);
    let newCartList = cartList.slice();

    if (index !== NOT_FOUND) {
      newCartList[index].quantity += quantity;
    } else {
      const cartObject = makeCartObject(product, quantity);
      newCartList.push(cartObject);
    }

    setCartList(newCartList);
  }

  function updateCartList(product) {
    const index = indexInCart(product);
    if (index === NOT_FOUND) return;
    let newCartList = cartList.slice();
    newCartList[index] = product;
    setCartList(newCartList);
  }

  function deleteFromCartList(item) {
    const newList = cartList.filter((el) => el.id !== item.id);
    setCartList(newList);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="about" element={<AboutPage />} />
          <Route
            path="products"
            element={
              <ProductsListPage products={products} addToCart={addToCart} />
            }
          />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route
            path="cart"
            element={
              <CartPage
                cartList={cartList}
                removeFromCart={deleteFromCartList}
                updateCartList={updateCartList}
              />
            }
          />
          <Route
            path="*"
            element={
              <ProductsListPage products={products} addToCart={addToCart} />
            }
          />
          {products.map((product) => (
            <Route
              path={"products/" + product.id}
              element={<ProductPage product={product} addToCart={addToCart} />}
              key={product.id}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
