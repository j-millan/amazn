"use client";

import { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FieldError, UseFormReturn } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";

import styles from "./TextInput.module.css";

export interface TextInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  label: string;
  placeholder?: string;
  password?: boolean;
  maxLength?: number;
}

export const TextInput = ({
  name,
  form,
  label,
  placeholder,
  password = false,
  maxLength,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const error = form.formState.errors[name] as FieldError;
  const value = form.watch(name);

  useEffect(() => {
    if (maxLength && maxLength > 0 && value) {
      form.setValue(name, value.slice(0, maxLength));
    }
  }, [value, maxLength, name, form]);

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
          {...form.register(name)}
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
