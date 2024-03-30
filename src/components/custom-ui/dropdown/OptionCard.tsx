import { ReactNode } from "react";

interface OptionCardProps {
  children: ReactNode;
  isSelected: boolean;
  onSelectOption?: (option: ReactNode) => void;
}

const OptionCard = (optionCardProps: OptionCardProps) => {
  const handleOptionClick = (opt: any) => {
    optionCardProps.onSelectOption?.(opt);
  };

  return (
    <div
      onClick={() => handleOptionClick(optionCardProps.children)}
      className={`flex items-center justify-end
                  hover:bg-gray-50 rounded-md cursor-pointer gap-2 px-2 py-1 w-full
                  ${optionCardProps.isSelected ? "bg-gray-50" : ""}`}
    >
      {optionCardProps.children}
    </div>
  );
};

export default OptionCard;
