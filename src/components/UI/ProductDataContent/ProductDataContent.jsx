import AddProductToCartBlock from "../AddProductToCartBlock/AddProductToCartBlock";
import ProductEnergyData from "../ProductEnergyData/ProductEnergyData";
import ProductPriceData from "../ProductPriceData/ProductPriceData";
import ProductQiEnergyData from "../ProductQiEnergyData/ProductQiEnergyData";
import ProductSpicinessData from "../ProductSpicinessData/ProductSpicinessData";
import ProductWeightData from "../ProductWeightData/ProductWeightData";

function ProductDataContent({ product, addToCart }) {
  return (
    <div className="mx-10 mt-0 sm:my-5 w-full sm:w-80">
      <h2 className="mb-3 text-xl font-bold">{product?.title}</h2>
      <ProductPriceData price={product?.price} />
      <ProductWeightData weight={product?.weight} />
      <ProductSpicinessData spiciness={product?.spiciness} />
      <ProductQiEnergyData qiEnergy={product?.qi} />
      <ProductEnergyData
        productEnergy={{
          fat: product.fat,
          protein: product.protein,
          carbohydrate: product.carbohydrate,
        }}
      />
      <AddProductToCartBlock product={product} addToCart={addToCart} />
    </div>
  );
}

export default ProductDataContent;
