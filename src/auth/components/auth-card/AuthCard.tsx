import styles from "./AuthCard.module.css";

interface AuthCardProps {
  children: React.ReactNode;
}

export const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className={styles.authCard}>
      { children }
    </div>
  );
};