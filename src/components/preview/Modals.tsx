import { Button } from "../custom-ui";
import { useModal } from "../custom-ui/contexts/ModalProvider";

import BaseCard from "./BaseCard";
import ConfirmModal from "../custom-ui/modal/ConfirmModal";

const Modals = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <div>
        <h1>Modal Content</h1>
        <p>This is the content of the modal</p>
      </div>
    );
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log("Item deleted");
  };

  const handleOpenConfirmModal = () => {
    openModal(
      <ConfirmModal
        onConfirm={handleDelete}
        question="Are you sure you want to delete this item?"
      />,
      "Confirm Delete"
    );
  };

  return (
    <BaseCard className="!flex-row">
      <Button onClick={handleOpenModal} type="info" className="w-fit">
        Open Modal
      </Button>

      <Button onClick={handleOpenConfirmModal} type="info" className="w-fit">
        Open Confirm Modal
      </Button>
    </BaseCard>
  );
};

export default Modals;
