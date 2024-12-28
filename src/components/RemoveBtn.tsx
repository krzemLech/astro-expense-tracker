import { refresh } from "@/lib/routes";
import { actions } from "astro:actions";
import { useCallback } from "react";

type RemoveBtnProps = {
  id: string;
};

/** Used react component here because for newly-added items regualr js script failed ot set binding */
const RemoveBtn = ({ id }: RemoveBtnProps) => {
  const handleRemove = useCallback(() => {
    actions
      .removeExpense({ id })
      .then(() => refresh())
      .catch(console.error); // add error handling
  }, [id]);
  return (
    <button className="remove-btn" onClick={handleRemove}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        className="size-4 stroke-red-500 dark:hover:stroke-red-300 hover:stroke-red-800 pt-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

export default RemoveBtn;
