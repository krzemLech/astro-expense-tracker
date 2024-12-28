const AddBtn = () => {
  return (
    <button
      type="submit"
      className="bg-gradient-primary p-1 rounded-full bg-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        className="size-5 stroke-zinc-100 hover:stroke-white dark:stroke-zinc-900 dark:hover:stroke-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
};

export default AddBtn;
