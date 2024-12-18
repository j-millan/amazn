"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoAlert } from "react-icons/go";

import { AuthContext } from "@/auth";
import styles from "./ErrorCard.module.css";

export const AuthErrorCard = () => {
  const { error, setError } = useContext(AuthContext);
  const pathname = usePathname();

  useEffect(() => {
    setError([]);
  }, [ pathname, setError ]);

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
};
