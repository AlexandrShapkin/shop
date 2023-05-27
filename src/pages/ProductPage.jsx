import { FaRubleSign } from "react-icons/fa";
import { TbPepperOff, TbPepper } from "react-icons/tb";

function ProductPage({ product }) {
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
          <TbPepper className="inline"/>
        </div>
      );
    } else if (spiciness <= 10000) {
      return (
        <div >
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
        </div>
      );
    } else if (spiciness <= 50000) {
      return (
        <div >
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
        </div>
      );
    } else if (spiciness <= 1000000) {
      return (
        <div >
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
        </div>
      );
    } else {
      return (
        <div >
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
          <TbPepper className="inline"/>
        </div>
      );
    }
  }

  return (
    <div className="w-full py-5">
      <div className="flex mx-auto  flex-wrap w-full max-w-screen-lg">
        <div className="w-full sm:w-80 mx-10 my-5 overflow-hidden rounded-md">
          <img src={product?.photo} alt="" />
        </div>
        <div className="mx-10 mt-0 sm:my-5 w-full sm:w-80">
          <h2 className="mb-3 text-xl font-bold">{product?.data.title}</h2>
          <div className="flex justify-between">
            <p>Цена:</p>
            <p className="whitespace-nowrap">
              {product?.data.price}
              <FaRubleSign className="inline" />
            </p>
          </div>
          <div className="flex justify-between">
            <p>Вес:</p>
            <p className="whitespace-nowrap">{product?.data.weight}</p>
          </div>
          <div className="flex justify-between">
            <p>Острота:</p>
            <div className="whitespace-nowrap">{getSpicinessIcon(product?.data.spiciness)}</div>
          </div>
          <div className="flex justify-between">
            <p>Энергия Ци:</p>
            <p className="whitespace-nowrap">{product?.data.qi}</p>
          </div>
          <h4>Пищевая ценность (100г)</h4>
          <div className="flex justify-between">
            <p>Белки:</p>
            <p className="whitespace-nowrap">{product?.data.energy.protein}</p>
          </div>
          <div className="flex justify-between">
            <p>Жиры:</p>
            <p className="whitespace-nowrap">{product?.data.energy.fat}</p>
          </div>
          <div className="flex justify-between">
            <p>Углеводы:</p>
            <p className="whitespace-nowrap">{product?.data.energy.carbohydrate}</p>
          </div>
        </div>
      </div>
      <div className="flex mx-auto  flex-wrap max-w-screen-lg w-4/5">
        <div className="mt-3">
          <h3 className="whitespace-nowrap mb-3 text-xl font-bold">Состав</h3>
          <p className="indent-8 text-justify">{product?.data.composition}</p>
        </div>
        <div className="mt-5">
          <h3 className="whitespace-nowrap mb-3 text-xl font-bold">Описание</h3>
          <p className="indent-8 text-justify">{product?.data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
