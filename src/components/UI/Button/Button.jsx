import styled from "styled-components";

function Button({ children, className, onClick }) {
  const Button = styled.button`
    border-radius: 0.375rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  `;
  return (
    <Button className={[className].join(" ")} onClick={onClick}>
      {children}
    </Button>
  );
}

export default Button;
