'use client';

import { getCountryData } from "countries-list";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import styles from "./LocationSelector.module.css";

export const LocationSelector = () => {
  const currentCountry = getCountryData("US").name;
  const [location] = useState(currentCountry);

  return (
    <div className={styles.locationSelector}>
      <GrLocation size={18} />
      <span className={styles.text}>
        <span>Deliver to</span>
        <span className={styles.location}>{ location }</span>
      </span>
    </div>
  );
};
