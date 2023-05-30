function ProductAdditionalData({composition, description}) {
  return (
    <div className="flex flex-col mx-auto flex-wrap max-w-screen-lg w-4/5">
    <div className="mt-3">
      <h3 className="whitespace-nowrap mb-3 text-xl font-bold">Состав</h3>
      <p className="indent-8 text-justify">{composition}</p>
    </div>
    <div className="mt-5">
      <h3 className="whitespace-nowrap mb-3 text-xl font-bold">Описание</h3>
      <p className="indent-8 text-justify">{description}</p>
    </div>
  </div>
  );
}

export default ProductAdditionalData;