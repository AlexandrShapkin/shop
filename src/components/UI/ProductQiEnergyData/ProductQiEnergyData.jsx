function ProductQiEnergyData({ qiEnergy }) {
  return (
    <div className="flex justify-between">
      <p>Энергия Ци:</p>
      <p className="whitespace-nowrap">{qiEnergy}</p>
    </div>
  );
}

export default ProductQiEnergyData;
