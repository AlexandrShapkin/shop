import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsListPage from "./pages/ProductsListPage";
import VacanciesPage from "./pages/VacanciesPage";

import { fetchProductsData } from "./utils/fetchData";

import { productDummyObject } from "./utils/productDummy";

import "./App.css";
import { CookiesProvider, useCookies } from "react-cookie";

const NOT_FOUND = -1;

function App() {
  const [theme, setTheme] = useState("");
  const [cartList, setCartList] = useState([]);
  const [cookies, setCookies] = useCookies("cart", "theme");
  const [products, setProducts] = useState([productDummyObject]);

  useEffect(() => {
    setTheme(cookies.theme);
    fetchProductsData().then((productsData) => {
      setProducts(productsData);
    });
  }, []);

  useEffect(() => {
    if (cookies["cart"]) {
      let newCart = [];
      products?.forEach((product) => {
        if (product._id in cookies.cart) {
          newCart.push(makeCartObject(product, cookies.cart[product._id]));
        }
      });
      setCartList(newCart);
    }
  }, [products]);

  useEffect(() => {
    let cart = {};
    cartList.forEach((item) => (cart[item._id] = item.quantity));
    setCookies("cart", cart);
  }, [cartList]);

  useEffect(() => {
    setCookies("theme", theme);
  }, [theme]);

  function makeCartObject(product, quantity = 1) {
    let obj = Object();
    obj._id = product._id;
    obj.photo = product.photo;
    obj.title = product.title;
    obj.price = product.price;
    obj.quantity = quantity;

    return obj;
  }

  function indexInCart(product) {
    for (let i = 0; i < cartList.length; i++) {
      if (product._id === cartList[i]._id) return i;
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
    const newList = cartList.filter((el) => el._id !== item._id);
    setCartList(newList);
  }

  function clearCartList() {
    setCartList([]);
  }

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
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
                  clearCartList={clearCartList}
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
                path={"products/" + product._id}
                element={
                  <ProductPage product={product} addToCart={addToCart} />
                }
                key={product._id}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
