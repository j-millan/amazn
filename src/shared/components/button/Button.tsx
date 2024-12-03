"use client";

import { useRouter } from "next/navigation";

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
  disabled?: boolean;
  block?: boolean;
  href?: string;
}

export const Button = ({
  children,
  click,
  size = ButtonSizeEnum.MD,
  color = ButtonColorEnum.PRIMARY,
  rounded = false,
  disabled = false,
  block = false,
  href = "",
}: ButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    if (disabled) return;
    if (click) click();
    if (href) router.push(href);
  };

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${
        rounded && styles.rounded
      } ${block && styles.block} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
