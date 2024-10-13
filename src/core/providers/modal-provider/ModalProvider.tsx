"use client";

import { createContext, useState } from "react";
import styles from "./ModalProvider.module.css";

interface ModalContextProps {
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<JSX.Element>();

  const openModal = (modalContent: JSX.Element) => { 
    setModal(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <div className={`${styles.wrapper} ${isOpen && styles.show}`}>
        {modal}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
