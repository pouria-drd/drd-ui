import { useState } from "react";
import TickIcon from "./icons/TickIcon";

interface CheckBoxProps {
  label: string;
  className?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = (checkBoxProps: CheckBoxProps) => {
  const [checked, setChecked] = useState(checkBoxProps.defaultChecked);

  const handleCheckboxChange = () => {
    if (checkBoxProps.disabled) return;

    const newValue = !checked;
    setChecked(newValue);
    checkBoxProps.onChange?.(newValue);
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 ${
        checkBoxProps.disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"
      } ${checkBoxProps.className}`}
      onClick={handleCheckboxChange}
    >
      <div className={`${checkBoxProps.disabled ? "text-gray-500" : ""}`}>
        {checkBoxProps.label}
      </div>

      <div
        className={`size-5 flex items-center justify-center text-white
        border border-gray-400 rounded ${checked ? "bg-blue-500" : "bg-white"}`}
      >
        {checked && <TickIcon />}
      </div>
    </div>
  );
};

export default Checkbox;
