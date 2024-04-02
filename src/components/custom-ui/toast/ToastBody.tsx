import CloseIcon from "../icons/CloseIcon";

interface ToastBodyProps {
  message: string | undefined;
  onClose: () => void;
}

const ToastBody = (toastBodyProps: ToastBodyProps) => {
  const handleOnClose = () => {
    toastBodyProps.onClose();
  };

  return (
    <>
      <h3 className="font-semibold text-xl w-full">{toastBodyProps.message}</h3>

      <div className="relative">
        <button className="absolute -bottom-1 -right-3" onClick={handleOnClose}>
          <CloseIcon />
        </button>
      </div>
    </>
  );
};

export default ToastBody;
