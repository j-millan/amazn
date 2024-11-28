"use client";

import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FieldError } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";

import styles from "./TextInput.module.css";

export interface TextInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  register: Function;
  label: string;
  placeholder?: string;
  error?: FieldError;
  password?: boolean;
}

export const TextInput = ({
  name,
  register,
  label,
  placeholder,
  error,
  password = false,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.textInput}>
      {/* Label */}
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {/* Label */}

      {/* Input */}
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${error && styles.hasError} ${
            password && styles.isPassword
          }`}
          type={password && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          {...register(name)}
        />

        {/* Show password button */}
        {password && (
          <span
            className={styles.showPassword}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? <LuEye size={16} /> : <LuEyeOff size={16} />}
          </span>
        )}
        {/* Show password button */}
      </div>
      {/* Input */}

      {/* Error */}
      {error && (
        <span className={styles.error}>
          <AiOutlineExclamationCircle size={14} />
          <span className={styles.message}>{error?.message}</span>
        </span>
      )}
      {/* Error */}
    </div>
  );
};
