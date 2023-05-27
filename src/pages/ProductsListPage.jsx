import ProductsContent from "../components/UI/ProductsContent/ProductsContent";

function ProductsPage({products}) {
  return (
    <div className="App">
      <main className="flex flex-col justify-between ">
        <ProductsContent title={"Пельмени"} products={products} />
      </main>
    </div>
  );
}

export default ProductsPage;