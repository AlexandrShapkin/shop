import ProductsContent from "../components/UI/ProductsContent/ProductsContent";

function ProductsPage({products, addToCart}) {
  return (
    <div className="App">
      <main className="flex flex-col justify-between ">
        <ProductsContent title={"Пельмени"} products={products} addToCart={addToCart} />
      </main>
    </div>
  );
}

export default ProductsPage;