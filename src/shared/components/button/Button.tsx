import { ButtonColorEnum, ButtonSizeEnum } from "@/shared";
import styles from "./Button.module.css";

type ButtonSizeType = ButtonSizeEnum.SM | ButtonSizeEnum.MD | ButtonSizeEnum.LG;
type ButtonColorType = ButtonColorEnum.PRIMARY | ButtonColorEnum.LIGHT;

interface ButtonProps {
  children: React.ReactNode;
  click?: () => void;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  rounded?: boolean;
  block?: boolean;
}

export const Button = ({
  children,
  click,
  size = ButtonSizeEnum.MD,
  color = ButtonColorEnum.PRIMARY,
  rounded = false,
  block = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${
        rounded && styles.rounded
      } ${block && styles.block}`}
      onClick={click}
    >
      {children}
    </button>
  );
};
