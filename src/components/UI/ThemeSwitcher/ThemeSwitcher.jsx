import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import { useEffect, useState } from "react";

function ThemeSwitcher({theme, setTheme}) {
  function toggleTheme() {
    setTheme(theme === "dark" ? "" : "dark");
  }

  useEffect(() => {
    document.querySelector("html").setAttribute("class", theme);
  }, [theme]);

  const ThemeSwitcher = styled.button`
    padding: 5px 10px;
    background-color: transparent;
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  return (
    <ThemeSwitcher onClick={toggleTheme}>
      <FaRegLightbulb />
    </ThemeSwitcher>
  );
}

export default ThemeSwitcher;
