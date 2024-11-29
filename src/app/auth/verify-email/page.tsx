import { PrivacyNotice, VerifyEmailForm } from "@/auth";
import styles from "./page.module.css";

const VerifyEmailPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Verify email address</h2>

      <p className={styles.message}>
        To verify your email, we&apos;ve send a One Time Password (OTP) to your
        email.
        <br />
        <a href="#" className="link">(Change)</a>
      </p>

      <VerifyEmailForm />

      <PrivacyNotice />
    </div>
  );
};

export default VerifyEmailPage;
