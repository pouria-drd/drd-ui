import { useId, useState, ChangeEvent } from "react";

interface InputProps {
  placeHolder: string;

  value?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];

  className?: string;

  errorMessage?: string;
  errorMsgInBlur?: boolean;
  errorBorderInBlur?: boolean;

  getID?: (id: string) => void;
  onChange?: (value: string) => void;
}

const Input = (inputProps: InputProps) => {
  const uniqueId = `Input${useId()}`;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputProps.disabled) return;
    inputProps.onChange?.(e.target.value);
  };

  return (
    <div className="relative r2l w-full h-12">
      <input
        id={uniqueId}
        required={true}
        type={inputProps.type}
        value={inputProps.value}
        disabled={inputProps.disabled}
        maxLength={inputProps.maxLength}
        minLength={inputProps.minLength}
        className={`transition-all outline-none peer focus:ring-0

            bg-white 
            text-gray-800

            border
            border-gray-400

            ${
              inputProps.disabled
                ? "opacity-70 cursor-not-allowed hover:border-gray-400"
                : "hover:border-blue-500"
            }

            ${inputProps.errorMessage && "hover:border-red-500"}

            ${
              isFocused && inputProps.errorMessage
                ? "focus:border-red-500 hover:border-red-500"
                : "focus:border-blue-500 hover:border-blue-500"
            }

            ${
              inputProps.errorBorderInBlur &&
              inputProps.errorMessage &&
              "border-red-500"
            }
            
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
      {!inputProps.errorMsgInBlur && isFocused && inputProps.errorMessage && (
        <p className="text-red-500 text-[10px] mt-[2px] ml-2">
          {inputProps.errorMessage}
        </p>
      )}

      {inputProps.errorMsgInBlur && inputProps.errorMessage && (
        <p className="text-red-500 text-[10px] mt-[2px] ml-2">
          {inputProps.errorMessage}
        </p>
      )}
    </div>
  );
};
export default Input;
