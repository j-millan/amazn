import Image from "next/image";
import styles from "./TopMenu.module.css";

export const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <Image
        className={styles.logo}
        src="/image/logo.png"
        alt="Amazn logo"
        width={80}
        height={30}
      />
    </div>
  );
};
