import CloseIcon from "./icons/CloseIcon";
import { useModal } from "../contexts/ModalProvider";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
}

const Modal = (modalProps: ModalProps) => {
  const { closeModal } = useModal();

  const title = modalProps.title || "Title";

  const handleCloseModal = () => {
    closeModal();
  };

  const stopPropagation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={stopPropagation}
      className="bg-white cursor-default
      flex flex-col items-center justify-center gap-4
      w-[90vw] sm:w-96 rounded-lg p-4"
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <button onClick={handleCloseModal}>
          <CloseIcon />
        </button>
        <h3 className="text-xl">{title}</h3>
      </div>

      <div className="w-full">{modalProps.children}</div>
    </div>
  );
};

export default Modal;
