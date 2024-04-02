import { useState, useEffect, ReactNode } from "react";

import OptionContainer from "./OptionContainer";
import OptionCard from "./OptionCard";
import ArrowDownIcon from "./icons/ArrowDownIcon";

interface DropdownProps {
  title?: string;
  children: ReactNode[];
  disabled?: boolean;
  defaultOption?: number;
  onSelectOption?: (option: ReactNode) => void;
}

const Dropdown = (dropdownProps: DropdownProps) => {
  const title = dropdownProps.title || "انتخاب کنید";

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleDropdownClick = () => {
    if (dropdownProps.disabled) return;
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    if (dropdownProps.disabled) return;
    setSelectedOption(option);
    setIsOpen(false);
    dropdownProps.onSelectOption?.(option);
  };

  useEffect(() => {
    const num = dropdownProps.defaultOption;

    if (num !== undefined && num >= 0 && num < dropdownProps.children.length) {
      setSelectedOption(dropdownProps.children[num]);
    }
  }, [dropdownProps.defaultOption]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-w-40">
      <div
        onClick={handleDropdownClick}
        className={`bg-white text-gray-400
        flex items-center justify-between gap-2 w-full
        rounded-md p-2.5 ${
          dropdownProps.disabled
            ? "bg-opacity-80 cursor-not-allowed"
            : " bg-opacity-100 cursor-pointer"
        }`}
      >
        <span className={`${isOpen ? "rotate-180" : ""} transition-all`}>
          <ArrowDownIcon />
        </span>

        {selectedOption ? selectedOption : <p>{title}</p>}
      </div>

      <OptionContainer isOpen={isOpen}>
        {dropdownProps.children.map((opt, idx) => (
          <OptionCard
            key={idx}
            onSelectOption={(opt) => handleOptionClick(opt)}
            isSelected={opt === selectedOption}
          >
            {opt}
          </OptionCard>
        ))}
      </OptionContainer>
    </div>
  );
};

export default Dropdown;
