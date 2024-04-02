import { useModal } from "../contexts/ModalProvider";

interface ConfirmModalProps {
  question: string;
  onConfirm: () => void;
}

const ConfirmModal = (ConfirmModalProps: ConfirmModalProps) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    ConfirmModalProps.onConfirm();
    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col items-start justify-center gap-4 px-6">
      <p>{ConfirmModalProps.question}</p>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleCloseModal}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
