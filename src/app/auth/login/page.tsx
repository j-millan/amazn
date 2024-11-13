import { Button, ButtonColorEnum, ButtonSizeEnum, TextInput } from "@/shared";
import styles from "./page.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      {/* Form */}
      <form className={styles.form}>
        <TextInput label="Email or mobile phone number" />
        <TextInput label="Password" />
        <Button block={true} size={ButtonSizeEnum.SM}>
          Log in
        </Button>
      </form>
      {/* Form *
      
      {/* Notice */}
      <p className={styles.notice}>
        By continuing, you agree to Amazn&apos;s&nbsp;
        <a href="#" className="link">
          Conditions of Use
        </a>{" "}
        and&nbsp;
        <a href="#" className="link">
          Privacy Notice
        </a>
        .
      </p>
      {/* Notice */}

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.singUpMsg}>
          <div className={styles.crossline}></div>
          <span className={styles.text}>New to Amazn?</span>
          <div className={styles.crossline}></div>
        </div>
        <Button
          block={true}
          size={ButtonSizeEnum.SM}
          color={ButtonColorEnum.LIGHT}
        >
          Create your Amazn account
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
