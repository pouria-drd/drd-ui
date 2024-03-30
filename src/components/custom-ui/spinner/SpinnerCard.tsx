import Spinner from "./Spinner";
import { ReactNode } from "react";

interface SpinnerCardProps {
  title?: string;
  logo?: ReactNode;
}

const SpinnerCard = (spcProps: SpinnerCardProps) => {
  const title = spcProps.title || "لطفا صبر کنید";
  return (
    <div
      className="bg-white relative cursor-default
        flex flex-col items-center justify-between gap-2
        rounded-lg mx-auto w-fit px-10 py-5"
    >
      {spcProps.logo && <span>{spcProps.logo}</span>}
      <div className="flex items-center justify-between gap-2 w-full">
        <Spinner size={15} borderWidth={2} />
        <p style={{ direction: "rtl" }}>{title}</p>
      </div>
    </div>
  );
};

export default SpinnerCard;
