import styled from "styled-components";
// import "./App.css";
// import Logo from "./components/Logo/Logo";
import logo from "../logo_lighter.png";
import dumplings from "../dumplings1.jpg";
import Header from "../components/Header/Header";
import MenuBar from "../components/UI/MenuBar/MenuBar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import ProductsContent from "../components/UI/ProductsContent/ProductsContent";

function ProductsPage() {
  const product = {
    photo: dumplings,
    data: {
      title: "Драконьи кулаки",
      price: "570",
      weight: "360гр",
    },
  };

  let products = Array(50).fill(product);

  return (
    <div className="App">
      <main className="flex flex-col justify-between bg-white dark:bg-slate-600 text-slate-900 dark:text-white">
        <ProductsContent title={"Пельмени"} products={products} />
        {/* <hr className="w-4/5 mx-auto border border-y-zinc-400 dark:border-y-zinc-200 border-t-0" /> */}
      </main>
    </div>
  );
}

export default ProductsPage;