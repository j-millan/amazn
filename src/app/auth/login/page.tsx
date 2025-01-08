import { Metadata } from "next";

import { AuthCard, LoginForm, PrivacyNotice } from "@/auth";
import { Button, ButtonColorEnum, ButtonSizeEnum } from "@/shared";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Amazn Sign-In",
  description: "Sign in to your Amazn account.",
  keywords:
    "sing-in, signin, login, log in, authenticate, auth, amazn login, amazn signin, amazon authenticate",
};

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <AuthCard>
        <div className={styles.container}>
          <h2 className={styles.title}>Sign in</h2>

          {/* Form */}
          <LoginForm />
          {/* Form */}

          {/* Notice */}
          <PrivacyNotice />
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
              href="sign-up"
            >
              Create your Amazn account
            </Button>
          </div>
          {/* Footer */}
        </div>
      </AuthCard>
    </div>
  );
};

export default LoginPage;
