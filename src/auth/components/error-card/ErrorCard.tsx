"use client";

import { GoAlert } from "react-icons/go";
import styles from './ErrorCard.module.css';
import { useContext } from "react";
import { AuthContext } from "@/auth";

export const ErrorCard = () => {
  const { error } = useContext(AuthContext);

  return (
    <div className={`${styles.errorCard} ${!!error.length && styles.show}`}>
      <GoAlert size={24} />
      <div className={styles.errors}>
        <span className={styles.title}>There was a problem</span>
        {error.map((err) => (
          <span className={styles.error} key={err}>
            {err}
          </span>
        ))}
      </div>
    </div>
  );
}