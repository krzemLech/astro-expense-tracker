type InputProps = {
  label: string;
  half?: boolean;
  hidden?: boolean;
  error?: string;
  value?: string;
  placeholder?: string;
};

const Input = ({
  label,
  half,
  placeholder,
  error,
  hidden,
  value,
}: InputProps) => {
  return (
    <div className={`form-item ${hidden && "w-0"}`}>
      <label
        htmlFor={label}
        className={`text-xs font-extralight text-zinc-800 dark:text-zinc-400", ${
          hidden && "hidden"
        }`}
      >
        {label.toUpperCase()}
      </label>
      <input
        id={label}
        name={label}
        className={`input block w-full mt-1 p-1 px-2 bg-zinc-200 dark:bg-zinc-600 border rounded placeholder:text-zinc-400 placeholder:font-extralight ${
          half ? "w-20" : "w-60"
        } ${error ? "border-red-500" : "border-zinc-500"}`}
        placeholder={placeholder}
        type={hidden ? "hidden" : "text"}
        value={value}
      />
      {
        <p className="text-xs font-extralight text-red-500 h-3 pt-1.5">
          {error}
        </p>
      }
    </div>
  );
};

export default Input;
