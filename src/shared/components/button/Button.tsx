"use client";

import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

import { ButtonColorEnum, ButtonSizeEnum } from "@/shared";
import styles from "./Button.module.css";

type ButtonSizeType = ButtonSizeEnum.SM | ButtonSizeEnum.MD | ButtonSizeEnum.LG;
type ButtonColorType = ButtonColorEnum.PRIMARY | ButtonColorEnum.LIGHT;
type ButtonType = "button" | "submit";

interface ButtonProps {
  children: React.ReactNode;
  click?: () => void;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  rounded?: boolean;
  block?: boolean;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}

export const Button = ({
  children,
  click,
  size = ButtonSizeEnum.MD,
  color = ButtonColorEnum.PRIMARY,
  rounded = false,
  block = false,
  type = "button",
  disabled = false,
  loading = false,
  href = "",
}: ButtonProps) => {
  const router = useRouter();

  const onClick = (e: React.MouseEvent) => {
    if (type === 'button') {
      e.stopPropagation();
    }

    if (disabled || loading || type === "submit") return;
    if (click) click();
    if (href) router.push(href);
  };

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${
        rounded && styles.rounded
      } ${block && styles.block} `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <AiOutlineLoading className={styles.spinner} /> : children}
    </button>
  );
};
