import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FieldError } from "react-hook-form";
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
  return (
    <div className={styles.textInput}>
      {/* Label */}
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {/* Label */}

      {/* Input */}
      <input
        className={`${styles.input} ${error && styles.hasError}`}
        type={password ? "password" : "text"}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* Input */}

      {error && (
        <span className={styles.error}>
          <AiOutlineExclamationCircle size={14} />
          <span className={styles.message}>{error?.message}</span>
        </span>
      )}
    </div>
  );
};
