import Image from 'next/image';

import styles from "./page.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <Image
        className={styles.logo}
        src="/image/logo-black.png"
        alt="Amazn logo"
        width={100}
        height={45}
      />
      {/* Logo */}

      {/* Card */}
      <div className={styles.formCard}>{children}</div>
      {/* Card */}

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.separator}></div>
        <div className={styles.links}>
          <a href="#" className="link">
            Conditions of Use
          </a>
          <a href="#" className="link">
            Privacy Notice
          </a>
          <a href="#" className="link">
            Help
          </a>
        </div>
        <p className={styles.copyright}>
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
      {/* Footer */}
    </div>
  );
};

export default AuthLayout;
