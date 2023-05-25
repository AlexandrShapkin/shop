import ProductsContent from "../components/UI/ProductsContent/ProductsContent";

function ProductsPage({products}) {
  return (
    <div className="App">
      <main className="flex flex-col justify-between bg-white dark:bg-slate-600 text-slate-900 dark:text-white">
        <ProductsContent title={"Пельмени"} products={products} />
        {/* <hr className="w-4/5 mx-auto border border-y-zinc-400 dark:border-y-zinc-200 border-t-0" /> */}
      </main>
    </div>
  );
}

export default ProductsPage;