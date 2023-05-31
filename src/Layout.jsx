import logo from "./res/logo_lighter.png";
import Header from "./components/Header/Header";
import MenuBar from "./components/UI/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function Layout({theme, setTheme}) {
  return (
    <div className="App">
      <Header logo={logo} />
      <MenuBar theme={theme} setTheme={setTheme} />
      <div className="min-h-screen bg-white dark:bg-slate-600 text-slate-900 dark:text-white">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;