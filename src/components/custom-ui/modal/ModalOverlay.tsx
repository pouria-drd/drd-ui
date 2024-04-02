import { useModal } from "../contexts/ModalProvider";

interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay = (modalOverlayProps: ModalOverlayProps) => {
  const { closeModal } = useModal();

  const handleOverlayClick = () => {
    closeModal();
  };

  return (
    <div
      className="fixed top-0 left-0 inset-0 z-50 overflow-auto 
      bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      {modalOverlayProps.children}
    </div>
  );
};

export default ModalOverlay;
