import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./Layout";
import VacanciesPage from "./pages/VacanciesPage";

import dumplings from "./dumplings1.jpg";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage products={products} />} />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="*" element={<ProductsPage products={products} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
