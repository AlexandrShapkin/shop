import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function MenuBar() {
  const MenuItem = styled.li`
    padding: 5px 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  const Cart = styled.a`
    padding: 5px 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  return (
    <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
      <nav className="flex justify-between my-auto">
        <ul className="flex">
          <MenuItem>
            <a href="">Меню</a>
          </MenuItem>
          <MenuItem>
            <a href="">О нас</a>
          </MenuItem>
          <MenuItem>
            <a href="">Вакансии</a>
          </MenuItem>
        </ul>

        <div className="flex">
          <Cart>
            <FaShoppingCart className="text-slate-900 dark:text-white h-full" />
          </Cart>
          <ThemeSwitcher />
        </div>
      </nav>
      <hr className="w-full border border-y-slate-700 dark:border-y-white border-t-0" />
    </div>
  );
}

export default MenuBar;
