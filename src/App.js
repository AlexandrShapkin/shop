import styled from "styled-components";
import "./App.css";
import Logo from "./components/Logo/Logo";
import logo from "./logo_lighter.png";
import dumplings from "./dumplings1.jpg";
import Header from "./components/Header/Header";
import MenuBar from "./components/UI/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/UI/ProductCard/ProductCard";

function App() {
  const data = {
    title: "Драконьи кулаки",
    price: "570",
    weight: "360гр",
  }

  return (
    <div className="App">
      <Header logo={logo} />
      <MenuBar />
      <main className="p-10 bg-white dark:bg-slate-600 text-slate-900 dark:text-white">
        {/* <div>
          <h1>Новинки</h1>
        </div>
        <div>
          <h1>Акции</h1>
        </div>
        <div>
          <h1>Пельмни</h1>
        </div>
        <div>
          <h2>Напитки</h2>
        </div> */}
        <ProductCard photo={dumplings} productData={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
