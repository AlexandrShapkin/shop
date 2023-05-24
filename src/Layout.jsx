import logo from "./logo_lighter.png";
import Header from "./components/Header/Header";
import MenuBar from "./components/UI/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="App">
      <Header logo={logo} />
      <MenuBar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;