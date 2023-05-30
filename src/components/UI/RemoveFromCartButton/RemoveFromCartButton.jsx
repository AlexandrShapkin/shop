import { FaTrashAlt } from "react-icons/fa";

function RemoveFromCartButton({ product, removeCurrent}) {
  return (
    <div className="flex flex-col justify-center h-full">
      <button
        className="h-8 w-8 bg-zinc-300 dark:bg-slate-600 rounded-md"
        onClick={() => removeCurrent(product)}
      >
        <FaTrashAlt className="m-auto" />
      </button>
    </div>
  );
}

export default RemoveFromCartButton;
