import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";

function MenuBar({theme, setTheme}) {
  const MenuItem = styled.li`
    padding: 5px 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  const Cart = styled.div`
    padding: 5px 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
      <nav className="flex justify-between my-auto">
        <ul className="flex">
          <Link to="/products">
            <MenuItem>Меню</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem>О нас</MenuItem>
          </Link>
          <Link to="/vacancies">
            <MenuItem>Вакансии</MenuItem>
          </Link>
        </ul>

        <div className="flex">
          <Link to="/cart" >
            <Cart className="h-full">
              <FaShoppingCart className="text-slate-900 dark:text-white h-full" />
            </Cart>
          </Link>
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </div>
      </nav>
      <hr className="w-full border border-y-slate-700 dark:border-y-white border-t-0" />
    </div>
  );
}

export default MenuBar;
