import { BaseModal, ModalSizeEnum } from "@/core";
import { Button } from "@/shared";
import styles from "./LocationModal.module.css";

export const LocationModal = () => {
  return (
    <BaseModal title="Choose your location" size={ModalSizeEnum.SM}>
      <small className={styles.deliveryText}>
        Delivery options and delivery speeds may vary for different locations.
      </small>
      <Button rounded={true} block={true} href="/auth/login">
        Sign in to use your address
      </Button>
    </BaseModal>
  );
};
