import { GrClose } from "react-icons/gr";
import styles from "./BaseModal.module.css";
import { useContext } from "react";
import { ModalContext } from "@/core";

export enum ModalSizeEnum {
  SM = "small",
  MD = "medium",
  LG = "large",
}

type ModalSizeType = ModalSizeEnum.SM | ModalSizeEnum.MD | ModalSizeEnum.LG;

interface BaseModalProps {
  children: React.ReactNode;
  title: string;
  size?: ModalSizeType;
}

export const BaseModal = ({ children, title, size = ModalSizeEnum.MD }: BaseModalProps) => {
  const { closeModal } = useContext(ModalContext);

  const onCloseClick = () => {
    closeModal();
  };

  return (
    <div className={`${styles.baseModal} ${styles[size]}`}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <GrClose size={16} onClick={onCloseClick} />
      </div>

      {/* Bdody */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
