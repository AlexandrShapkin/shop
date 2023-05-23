import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const Footer = styled.footer``;
  const FooterContent = styled.div`
    display: block;
    margin: 25px;
  `;
  return (
    <Footer>
      <hr className="w-full border border-y-slate-700 dark:border-y-white border-t-0" />
      <div className="flex flex-col sm:flex-row justify-between bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <FooterContent>
          <address>Email для связи: dragonkungfu@examplemail.com</address>
          <address className="">
            <h2>Адрес:</h2>
            <p>Россия, Москва, Дома у Никиты</p>
            <p>Недалеко от метро, которое возле Никиты</p>
          </address>
        </FooterContent>
        <FooterContent>
          <a>Работать у нас</a>
        </FooterContent>
        <FooterContent>
          <a>
            <FaGithub className="inline" /> GitHub проекта
          </a>
        </FooterContent>
      </div>
    </Footer>
  );
}

export default Footer;
