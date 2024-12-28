import { useState, useCallback } from "react";
import Input from "./Input";
import AddBtn from "./AddBtn";
import { formatDbDate } from "@/lib/dates";
import { actions } from "astro:actions";
import { refresh } from "@/lib/routes";

type Props = {
  selectedDate: Date;
  daysBack: number;
};

const defaultErrors = {
  title: "",
  amount: "",
  message: "",
};

const ExpenseForm = ({ selectedDate }: Props) => {
  const [errors, setErrors] = useState(defaultErrors);
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(e.currentTarget);
      data.append("createdAt", formatDbDate(selectedDate));
      actions.addExpense(data).then(({ data, error }) => {
        if (data?.success) {
          form.reset();
          setErrors(defaultErrors);
          refresh();
        }
        if (error && error.code === "BAD_REQUEST") {
          setErrors({
            title: (error as any).fields.title?.[0] || "",
            amount: (error as any).fields.amount?.[0] || "",
            message: (error as any).fields.createdAt?.[0] || "",
          });
        } else if (error) {
          setErrors({ ...defaultErrors, message: error.message });
        }
      });
    },
    [selectedDate]
  );

  return (
    <div className="border-t border-b border-zinc-600 bg-zinc-50 dark:bg-zinc-900 mt-4 p-4 relative">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input label="title" placeholder="..." error={errors.title} />
        <Input label="amount" placeholder="$" half error={errors.amount} />
        <div className="pt-8">
          <AddBtn />
        </div>
        <p className="absolute bottom-3 h-2.5 text-red-500 text-xs font-extralight">
          {errors.message}
        </p>
      </form>
    </div>
  );
};

export default ExpenseForm;
