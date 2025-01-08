"use client";

import { useRouter } from "next/navigation";
import { GoCheckCircle } from "react-icons/go";

import styles from "./page.module.css";
import { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div className={styles.successPage}>
      <div className={styles.card}>
        <GoCheckCircle size={24} />
        <div className={styles.message}>
          <span className={styles.title}>
            Your account has been created successfully!
          </span>
          <span className={styles.detail}>
            You will be redirected to the homepage in a few seconds.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
