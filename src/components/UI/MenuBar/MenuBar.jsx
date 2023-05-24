import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";

function MenuBar() {
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
          <MenuItem>
            <Link to="/products">Меню</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">О нас</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/vacancies">Вакансии</Link>
          </MenuItem>
        </ul>

        <div className="flex">
          <Cart>
            <Link to="/cart">
              <FaShoppingCart className="text-slate-900 dark:text-white h-full" />
            </Link>
          </Cart>
          <ThemeSwitcher />
        </div>
      </nav>
      <hr className="w-full border border-y-slate-700 dark:border-y-white border-t-0" />
    </div>
  );
}

export default MenuBar;
