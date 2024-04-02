import CloseIcon from "../icons/CloseIcon";

interface ToastHeaderProps {
  title: string | undefined;
  message: string | undefined;
  onClose: () => void;
}

const ToastHeader = (toastHeaderProps: ToastHeaderProps) => {
  const handleOnClose = () => {
    toastHeaderProps.onClose();
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">{toastHeaderProps.title}</h3>

        <div className="relative">
          <button
            className="absolute -bottom-3 -right-3"
            onClick={handleOnClose}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <p className="text-black text-sm mt-1 w-full">
        {toastHeaderProps.message}
      </p>
    </>
  );
};

export default ToastHeader;
