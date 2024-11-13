import styles from "./TextInput.module.css";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export const TextInput = ({ label, placeholder, minLength, maxLength }: TextInputProps) => {
  const NAME = label.toLowerCase();

  return (
    <div className={styles.textInput}>
      {/* Label */}
      <label className={styles.label} htmlFor={NAME}>
        {label}
      </label>
      {/* Label */}

      {/* Input */}
      <input
        className={styles.input}
        type="text"
        name={NAME}
        id={NAME}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {/* Input */}
    </div>
  );
};
