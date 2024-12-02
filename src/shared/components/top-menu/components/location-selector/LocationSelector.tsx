'use client';

import { useContext, useState } from "react";
import { getCountryData } from "countries-list";
import { GrLocation } from "react-icons/gr";

import { ModalContext } from "@/core";
import { LocationModal } from "../location-modal/LocationModal";
import styles from "./LocationSelector.module.css";

export const LocationSelector = () => {
  const currentCountry = getCountryData("US").name;
  const [location] = useState(currentCountry);
  const { openModal } = useContext(ModalContext);

  const onClick = () => {
    openModal(<LocationModal></LocationModal>);
  };
  
  return (
    <>
      <div onClick={onClick} className={styles.locationSelector}>
        <GrLocation size={18} />
        <span className={styles.text}>
          <span>Deliver to</span>
          <span className={styles.location}>{ location }</span>
        </span>
      </div>
    </>
  );
};
