import ProductImage from "../components/ProductImage/ProductImage";
import ProductAdditionalData from "../components/UI/ProductAdditionalData/ProductAdditionalData";
import ProductDataContent from "../components/UI/ProductDataContent/ProductDataContent";

function ProductPage({ product, addToCart }) {
  return (
    <div className="w-full py-5">
      <div className="flex mx-auto  flex-wrap w-full max-w-screen-lg">
        <ProductImage
          image={product?.photo}
          className={"w-full sm:w-80 mx-10 my-5 rounded-md"}
        />
        <ProductDataContent product={product} addToCart={addToCart} />
      </div>
      <ProductAdditionalData
        composition={product?.composition}
        description={product?.description}
      />
    </div>
  );
}

export default ProductPage;
