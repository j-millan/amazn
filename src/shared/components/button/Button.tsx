import styles from "./Button.module.css";

export enum ButtonSizeEnum {
  SM = "small",
  MD = "medium",
  LG = "large",
}

type ButtonSizeType = ButtonSizeEnum.SM | ButtonSizeEnum.MD | ButtonSizeEnum.LG;

interface ButtonProps {
  children: React.ReactNode;
  click?: () => void;
  size?: ButtonSizeType;
  rounded?: boolean;
  block?: boolean;
}

export const Button = ({
  children,
  click,
  size = ButtonSizeEnum.MD,
  rounded = false,
  block = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        rounded && styles.rounded
      } ${block && styles.block}`}
      onClick={click}
    >
      {children}
    </button>
  );
};
