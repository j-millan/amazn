import { Metadata } from "next";

import { Button, ButtonColorEnum, ButtonSizeEnum } from "@/shared";
import styles from "./page.module.css";
import { LoginForm } from "@/auth";

export const metadata: Metadata = {
  title: 'Amazon Login',
  description: 'Sign in to your Amazn account.',
  keywords: 'sing-in, signin, login, log in, authenticate, auth, amazn login, amazn signin, amazon authenticate',
};

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      
      <LoginForm></LoginForm>

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
      {/* Footer */}
    </div>
  );
};

export default LoginPage;
