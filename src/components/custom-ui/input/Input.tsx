import { useId, useState, ChangeEvent } from "react";

interface InputProps {
  placeHolder: string;

  value?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];

  className?: string;
  errorMessage?: string; // Error message to display

  getID?: (id: string) => void;
  onChange?: (value: string) => void;
}

const Input = (inputProps: InputProps) => {
  const uniqueId = `Input${useId()}`;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputProps.onChange?.(e.target.value);
  };

  return (
    <div className="relative r2l w-full h-12">
      <input
        id={uniqueId}
        type={inputProps.type}
        maxLength={inputProps.maxLength}
        minLength={inputProps.minLength}
        value={inputProps.value}
        required={true}
        className={`transition-all outline-none peer focus:ring-0

            bg-white 
            text-gray-800

            border 
            hover:border-blue-500

            ${
              isFocused && inputProps.errorMessage
                ? "focus:border-red-500"
                : "focus:border-blue-500"
            }
            
            border-gray-400

            rounded-md px-2.5 pb-2 pt-4 w-full h-full r2l ${
              inputProps.className
            }`}
        placeholder=" "
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <label
        htmlFor={uniqueId}
        className={`absolute transition-all duration-200 w-fit

                bg-gradient-to-b from-transparent from-55% to-45%
                to-transparent

                text-gray-400 

                ${
                  isFocused && inputProps.errorMessage
                    ? "peer-focus:text-red-500"
                    : "peer-focus:text-blue-500"
                }

                text-sm
                peer-focus:text-xs
                peer-valid:text-xs

                transform -translate-y-1/2 
                top-3 right-3 px-2 

                peer-focus:px-2 
                peer-focus:top-3
                
                peer-placeholder-shown:top-1/2 
                peer-placeholder-shown:-translate-y-1/2 
                
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-10 start-2`}
      >
        {inputProps.placeHolder}
      </label>

      {/* Error message */}
      {isFocused && inputProps.errorMessage && (
        <p className="text-red-500 text-xs mt-1 ml-2">
          {inputProps.errorMessage}
        </p>
      )}
    </div>
  );
};
export default Input;
