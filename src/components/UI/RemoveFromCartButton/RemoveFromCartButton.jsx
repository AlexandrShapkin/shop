import { FaTrashAlt } from "react-icons/fa";
import Button from "../Button/Button";

function RemoveFromCartButton({ product, removeCurrent}) {
  return (
    <div className="flex flex-col justify-center h-full">
      <Button
        className="h-8 w-8 bg-zinc-300 dark:bg-slate-600 rounded-md"
        onClick={() => removeCurrent(product)}
      >
        <FaTrashAlt className="m-auto" />
      </Button>
    </div>
  );
}

export default RemoveFromCartButton;
