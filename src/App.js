import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductsListPage from "./pages/ProductsListPage";
import Layout from "./Layout";
import VacanciesPage from "./pages/VacanciesPage";

import dumplings1 from "./dumplings1.jpg";
import dumplings2 from "./dumplings2.jpeg";
import dumplings3 from "./dumplings3.jpeg";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { useState } from "react";

const NOT_FOUND = -1;

const products = [
  {
    id: 1,
    photo: dumplings1,
    data: {
      title: "Драконьи кулаки",
      price: 570,
      weight: 360,
      spiciness: 2000,
      qi: 16,
      energy: {
        fat: 12,
        protein: 16,
        carbohydrate: 28,
      },
      composition:
        "Тесто (мука, яйца, вода), Куриная грудка, Имбирь, Зеленый лук, Грибы, Маринованная говядина, Специи и приправы, Креветки, Кальмары, Крабовое мясо, Свежие овощи и травы, Свинина, Лук, Имбирь, Восточные специи.",
      description:
        'Описание: "Драконьи кулаки" - это великолепные пельмени, которые представляют собой идеальное сочетание восточных и западных вкусов. Это мастерски сделанные ручной работы пельмени, изготовленные из нежного теста, начиненные ароматными и сочными ингредиентами. Каждый пельмень приготовлен с особым вниманием к деталям, чтобы дарить удивительное вкусовое путешествие каждому гостю "Драконьего кунгфу: Пельменной эпохи".',
    },
  },
  {
    id: 2,
    photo: dumplings2,
    data: {
      title: "Тайная змеиная клубка",
      price: 480,
      weight: 355,
      spiciness: 10000,
      qi: 12,
      energy: {
        fat: 16,
        protein: 18,
        carbohydrate: 21,
      },
      composition:
        "Тесто (мука, яйца, вода), Свинина, Ароматные специи, Черника или клюква, Куриное мясо, Перец чили, Чеснок, Пряные приправы, Шпинат, Брокколи, Базилик, Зеленый лук.",
      description:
        '"Тайная змеиная клубка" - это уникальный вид пельменей, вдохновленный легендарными змеями из восточных мифов. Эти пельмени имеют особую форму, напоминающую свернутую змеиную клубку. Их тонкое тесто тщательно обертывается вокруг начинки, создавая эффектное визуальное впечатление.',
    },
  },
  {
    id: 3,
    photo: dumplings3,
    data: {
      title: "Магический боевой круг",
      price: 520,
      weight: 380,
      spiciness: 5000,
      qi: 28,
      energy: {
        fat: 18,
        protein: 24,
        carbohydrate: 20,
      },
      composition:
        "Тесто (мука, яйца, вода), Говядина, Свинина, Баранина, Ароматные специи и травы, Креветки, Мидии, Осьминог, Свежие овощи, Изысканные приправы, Морковь, Грибы, Брокколи, Сладкий перец, Зеленый горошек.",
      description:
        '"Магический боевой круг" - это волшебные пельмени, которые обладают удивительными вкусовыми свойствами и представлены в форме зачарованного символа. Каждый пельмень является неповторимым произведением искусства, созданным с помощью мастерства и фантазии поваров "Драконьего кунгфу: Пельменной эпохи".',
    },
  },
];

function makeCartObject(product, quantity = 1) {
  let obj = new Object();
  obj.id = product.id;
  obj.photo = product.photo;
  obj.title = product.data.title;
  obj.price = product.data.price;
  obj.quantity = quantity;

  return obj;
}

function App() {
  const [cartList, setCartList] = useState([]);

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
