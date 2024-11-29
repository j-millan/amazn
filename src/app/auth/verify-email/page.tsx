import { PrivacyNotice, VerifyEmailForm, VerifyEmailMessage } from "@/auth";
import styles from "./page.module.css";

const VerifyEmailPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Verify email address</h2>

      <VerifyEmailMessage />

      <VerifyEmailForm />

      <PrivacyNotice />
    </div>
  );
};

export default VerifyEmailPage;
