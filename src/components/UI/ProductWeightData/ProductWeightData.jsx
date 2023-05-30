function ProductWeightData({weight}) {
  return (
    <div className="flex justify-between">
      <p>Вес:</p>
      <p className="whitespace-nowrap">{weight}</p>
    </div>
  );
}

export default ProductWeightData;
