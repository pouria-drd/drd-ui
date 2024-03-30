import Spinner from "./Spinner";
import { ReactNode } from "react";

interface SpinnerCardProps {
  title?: string;
  logo?: ReactNode;
}

const SpinnerCard = (spinnerCardProps: SpinnerCardProps) => {
  const title = spinnerCardProps.title || "لطفا صبر کنید";
  return (
    <div
      className="bg-white text-gray-700 relative cursor-default
        flex flex-col items-center justify-between gap-2
        rounded-md w-fit px-6 py-4"
    >
      {spinnerCardProps.logo && <span>{spinnerCardProps.logo}</span>}
      <div className="flex items-center justify-between gap-2 w-full">
        <Spinner size={15} borderWidth={2} />
        <p style={{ direction: "rtl" }}>{title}</p>
      </div>
    </div>
  );
};

export default SpinnerCard;
