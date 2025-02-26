import Image from "next/image";

import { LocationSelector } from "./components/location-selector/LocationSelector";
import styles from "./TopMenu.module.css";

export const TopMenu = () => {
  return (
    <div className={styles.topMenu}>
      <Image
        className={styles.logo}
        src="/image/logos/logo.png"
        alt="Amazn logo"
        width={80}
        height={30}
      />
      <LocationSelector />
    </div>
  );
};
