import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./Layout";
import VacanciesPage from "./pages/VacanciesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="*" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
