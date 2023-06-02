import styled from "styled-components";
import Logo from "../Logo/Logo";

function Header({ logo }) {
  const Header = styled.header``;

  const TitleContainer = styled.div`
    display: block;
    white-space: nowrap;
  `;

  const Title = styled.h1`
    font-weight: bold;
    font-size: 14px;
    max-width: 100%;
  `;

  const Subtitle = styled.h2`
    margin-top: 10px;
    word-break: break-all;
    font-size: small;
  `;
  return (
    <Header className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
      <div className="justify-between flex p-5">
        <div className="flex">
          <Logo logo={logo} className="block w-12 h-12 md:w-20 md:h-20" />
          <TitleContainer className="w-full hidden md:max-lg:flex">
            <Title>Драконий кунгфу: Пельменная эпоха</Title>
            <Subtitle className="text-sm sm:text-xs">Лучшая пельменная из оставшихся</Subtitle>
            <Subtitle className="hidden sm:block">Укрепите свой ифритовый стержень вместе с нами!</Subtitle>
          </TitleContainer>
        </div>
        <address className="text-sm hidden lg:block">
          <h2>Адрес:</h2>
          <p>Россия, Москва, Дома у Никиты</p>
          <p>Недалеко от метро, которое возле Никиты</p>
        </address>
      </div>
      <hr className="w-full border border-y-slate-700 dark:border-y-white border-t-0" />
    </Header>
  );
}

export default Header;
