import styles from "./PrivacyNotice.module.css";

export const PrivacyNotice = () => {
  return (
    <div className={styles.privacyNotice}>
      By continuing, you agree to Amazn&apos;s&nbsp;
      <a href="#" className="link">
        Conditions of Use
      </a>{" "}
      and&nbsp;
      <a href="#" className="link">
        Privacy Notice
      </a>
      .
    </div>
  );
};