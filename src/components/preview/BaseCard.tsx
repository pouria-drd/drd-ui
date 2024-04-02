interface BaseCardProps {
  className?: string;
  children?: React.ReactNode;
}

const BaseCard = (baseCardProps: BaseCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 w-full 
      ${baseCardProps.className}`}
    >
      {baseCardProps.children}
    </div>
  );
};

export default BaseCard;
