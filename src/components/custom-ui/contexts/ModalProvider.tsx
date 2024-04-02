import Modal from "../modal/Modal";
import ModalOverlay from "../modal/ModalOverlay";
import { useState, ReactNode, useContext, createContext } from "react";

interface ModalContextType {
  openModal: (content: ReactNode, title?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = (modalProviderProps: ModalProviderProps) => {
  const [modalTitle, setModalTitle] = useState<string>();

  const [modalContent, setModalContent] = useState<ReactNode>();

  const openModal = (content: ReactNode, title?: string) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modalProviderProps.children}

      {modalContent && (
        <ModalOverlay>
          <Modal title={modalTitle}>{modalContent}</Modal>
        </ModalOverlay>
      )}
    </ModalContext.Provider>
  );
};
