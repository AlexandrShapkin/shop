function QuantityBlock({ quantity, setQuantity }) {
  function increment() {
    if (quantity === "") {
      setQuantity(1);
      return;
    }
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (parseInt(quantity) - 1 < 1 || quantity === "") {
      return;
    }
    setQuantity(quantity - 1);
  }

  function changeHandler(value) {
    if (value === "") {
      setQuantity("");
      return;
    }
    const newValue = parseInt(value);
    if (Number.isNaN(newValue)) return;
    if (newValue > 1000) return;
    if (newValue <= 0) {
      return;
    }
    setQuantity(newValue);
  }

  return (
    <div className="flex w-28 justify-between mt-2">
      <button
        className="h-8 w-8 text-center bg-zinc-300 dark:bg-slate-700 rounded-md"
        onClick={() => decrement()}
      >
        -
      </button>
      <input
        className="h-8 w-8 text-center bg-zinc-200 dark:bg-slate-400 rounded-md"
        type="text"
        onChange={(e) => changeHandler(e.target.value)}
        value={quantity}
      />
      <button
        className="h-8 w-8 text-center bg-zinc-300 dark:bg-slate-700 rounded-md"
        onClick={() => increment()}
      >
        +
      </button>
    </div>
  );
}

export default QuantityBlock;
