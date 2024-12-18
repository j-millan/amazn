import { Metadata } from 'next';

import { Button, ButtonColorEnum, ButtonSizeEnum } from '@/shared';
import { AuthCard, PrivacyNotice, SignUpForm } from "@/auth";
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "Amazn Registration",
  description: "Create an Amazn account.",
  keywords:
    "sing-up, sig up, registration, create account, new account, amazn signup, amazn sign-up, amazn registration, amazon authenticate",
};


const SignUpPage = () => {
  return (
    <div className={styles.signupPage}>
      <AuthCard>
        <div className={styles.container}>
          <h2 className={styles.title}>Create account</h2>

          {/* Form */}
          <SignUpForm />
          {/* Form */}

          {/* Notice */}
          <PrivacyNotice />
          {/* Notice */}

          {/* Footer */}
          <div className={styles.footer}>
            <div className={styles.singUpMsg}>
              <div className={styles.crossline}></div>
              <span className={styles.text}>Already have an account?</span>
              <div className={styles.crossline}></div>
            </div>
            <Button
              block={true}
              size={ButtonSizeEnum.SM}
              color={ButtonColorEnum.LIGHT}
              href='login'
            >
              Sign in
            </Button>
          </div>
          {/* Footer */}
        </div>
      </AuthCard>
    </div>
  );
};

export default SignUpPage;
