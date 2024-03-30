import { ReactNode } from "react";

interface DropdownOptionProps {
  title: string;
  value: string;
  icon?: ReactNode;
}

const DropdownOption = (dropdownOptionProps: DropdownOptionProps) => {
  return (
    <div className={`flex items-center justify-end gap-2 w-full `}>
      <p>{dropdownOptionProps.title}</p>
      {dropdownOptionProps.icon && <span>{dropdownOptionProps.icon}</span>}
    </div>
  );
};

export default DropdownOption;
