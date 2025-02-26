"use client";

import { createContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import styles from "./ModalProvider.module.css";

interface ModalContextProps {
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
  toggleBackdrop: (s: boolean) => void;
}

const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
  toggleBackdrop: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<JSX.Element>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const openModal = (modalContent: JSX.Element) => {
    setModal(modalContent);
    setIsModalOpen(true);
    setShowBackdrop(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowBackdrop(false);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, toggleBackdrop: setShowBackdrop }}
    >
      {/* Backdrop */}
      <AnimatePresence>
        {showBackdrop && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

      </AnimatePresence>
      {/* Backdrop */}

      {/* Modal */}
      {isModalOpen && <div className={styles.modalWrapper}>{modal}</div>}
      {/* Modal */}

      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
