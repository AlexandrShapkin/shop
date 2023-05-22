import styled from "styled-components";

function Logo({logo, className}) {
  const Logo = styled.a`
    border: none;
  `;

  const Image = styled.img`
    border: none;
    width: 100%;
    height: 100%;  
  `;

  return (
    <Logo className={[className].join(" ")}>
      <Image src={logo} alt=" " />
    </Logo>
  );
}

export default Logo;