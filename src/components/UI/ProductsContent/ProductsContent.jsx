import styled from "styled-components";

function ProductsContent({title, products}) {
  const Wrapper = styled.div``;
  const Title = styled.h1``;

  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default ProductsContent;