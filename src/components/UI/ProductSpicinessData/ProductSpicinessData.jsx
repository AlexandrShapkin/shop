import { TbPepperOff, TbPepper } from "react-icons/tb";

function ProductSpicinessData({spiciness}) {
  function getSpicinessIcon(spiciness) {
    if (spiciness < 500) {
      return (
        <div>
          <TbPepperOff />
        </div>
      );
    } else if (spiciness <= 1000) {
      return (
        <div>
          <TbPepper className="inline" />
        </div>
      );
    } else if (spiciness <= 10000) {
      return (
        <div>
          <TbPepper className="inline" />
          <TbPepper className="inline" />
        </div>
      );
    } else if (spiciness <= 50000) {
      return (
        <div>
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
        </div>
      );
    } else if (spiciness <= 1000000) {
      return (
        <div>
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
        </div>
      );
    } else {
      return (
        <div>
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
          <TbPepper className="inline" />
        </div>
      );
    }
  }

  return (
    <div className="flex justify-between">
      <p>Острота:</p>
      <div className="whitespace-nowrap">
        {getSpicinessIcon(spiciness)}
      </div>
    </div>
  );
}

export default ProductSpicinessData;
