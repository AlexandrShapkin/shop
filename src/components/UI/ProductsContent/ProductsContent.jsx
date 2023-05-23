import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

function ProductsContent({ title, products }) {
  const Wrapper = styled.div``;
  const Title = styled.h2`
    font-weight: 50;
    font-size: 40px;
    margin: 1.75rem;
    margin-top: 0;
  `;

  return (
    <Wrapper className="max-w-screen-lg w-full mx-auto my-5">
      <Title>{title}</Title>
      <div className="flex flex-row flex-wrap px-5">
        {products?.map((product) => (
          <ProductCard
            className="mx-2 mb-2"
            photo={product.photo}
            productData={product.data}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default ProductsContent;
