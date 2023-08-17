import { cva } from "class-variance-authority";

const radioInputVariants = cva(
  "rounded-sm border border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-zinc-50",
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-2 placeholder:text-sm placeholder:capitalize",
        md: "text-md px-4 py-3 placeholder:text-md placeholder:capitalize",
        lg: "text-xl px-4 py-3 placeholder:text-lg placeholder:capitalize",
      },
      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      size: "sm",
    },
  }
);

const RadioInput = ({ className, variant, size, fullWidth, placeholder, id }) => (
  <input
    type="text"
    id={id}
    placeholder={placeholder}
    className={radioInputVariants({ variant, size, fullWidth, className })}
  ></input>
);
export default RadioInput;
