"use client";

import { useContext } from "react"
import { useRouter } from "next/navigation";

import { AuthContext } from "@/auth"
import styles from "./VerifyEmailMessage.module.css"

export const VerifyEmailMessage = () => {
  const { signUpData } = useContext(AuthContext);
  const router = useRouter();

  if (!signUpData) {
    router.push('sign-up');
  }

  return (
    <p className={styles.verifyEmailMessage}>
      To verify your email, we&apos;ve send a One Time Password (OTP) to{" "}
      {signUpData?.email}.
      <br />
      <a href="#" className="link">
        (Change)
      </a>
    </p>
  );
};