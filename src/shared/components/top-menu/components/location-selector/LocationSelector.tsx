'use client';

import { getCountryData } from "countries-list";
import { GrLocation } from "react-icons/gr";
import { useContext, useState } from "react";

import { ModalContext } from "@/core";
import styles from "./LocationSelector.module.css";
import { BaseModal, ModalSizeEnum } from "@/shared";

export const LocationSelector = () => {
  const currentCountry = getCountryData("US").name;
  const [location] = useState(currentCountry);
  const { openModal } = useContext(ModalContext);

  const locationModal = <BaseModal size={ModalSizeEnum.SM} title="Choose your location">hello</BaseModal>;

  const onClick = () => {
    openModal(locationModal);
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
