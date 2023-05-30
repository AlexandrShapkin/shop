function ProductEnergyData({productEnergy}) {
  return (
    <div>
      <h4>Пищевая ценность (100г)</h4>
      <div className="flex justify-between">
        <p>Белки:</p>
        <p className="whitespace-nowrap">{productEnergy.protein}</p>
      </div>
      <div className="flex justify-between">
        <p>Жиры:</p>
        <p className="whitespace-nowrap">{productEnergy.fat}</p>
      </div>
      <div className="flex justify-between">
        <p>Углеводы:</p>
        <p className="whitespace-nowrap">{productEnergy.carbohydrate}</p>
      </div>
    </div>
  );
}

export default ProductEnergyData;
