import { FieldError } from "react-hook-form";
import styles from "./TextInput.module.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export interface TextInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  register: Function;
  label: string;
  placeholder?: string;
  error?: FieldError;
}

export const TextInput = ({
  name,
  register,
  label,
  placeholder,
  error,
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
        type="text"
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
