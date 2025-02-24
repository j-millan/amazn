"use client";

import { createContext, useState } from "react";

import { CategorySelector } from "@/shop";
import styles from "./ModalProvider.module.css";

interface ModalContextProps {
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
  toggleCategorySelector: (s: boolean) => void;
}

const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
  toggleCategorySelector: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<JSX.Element>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);

  const openModal = (modalContent: JSX.Element) => {
    setModal(modalContent);
    setIsModalOpen(true);
    setShowBackdrop(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBackdrop(false);
  };

  const toggleCategorySelector = (s: boolean) => {
    setShowCategorySelector(s);
    setShowBackdrop(s);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, toggleCategorySelector }}
    >
      {/* Backdrop */}
      {showBackdrop && (
        <div className={`${styles.backdrop} ${showBackdrop && styles.show}`} />
      )}
      {/* Backdrop */}

      {/* Modal */}
      {isModalOpen && (
        <div className={`${styles.modalWrapper} ${isModalOpen && styles.show}`}>
          {modal}
        </div>
      )}
      {/* Modal */}

      {/* CategorySelector */}
      {showCategorySelector && <CategorySelector />}
      {/* CategorySelector */}

      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
