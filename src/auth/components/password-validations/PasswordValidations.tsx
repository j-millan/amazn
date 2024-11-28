"use client";

import { IoCheckmarkCircleOutline } from "react-icons/io5";

import {
  containsNumbers,
  containsSymbols,
  containsUppercaseAndLowercase,
  hasValidLength,
} from "@/core/validators/password-validator";
import { PasswordValidationMessageEnum } from "@/auth/enums/password-validation-message.enum";
import styles from "./PasswordValidations.module.css";

interface PasswordValidationsProps {
  password: string;
}

const validationItems: Array<{
  validator: (value: string) => boolean;
  message: string;
}> = [
  {
    validator: hasValidLength,
    message: PasswordValidationMessageEnum.VALID_LENGTH,
  },
  {
    validator: containsUppercaseAndLowercase,
    message: PasswordValidationMessageEnum.CONTAINS_UPPERCASE_AND_LOWERCASE,
  },
  {
    validator: containsNumbers,
    message: PasswordValidationMessageEnum.CONTAINS_NUMBERS,
  },
  {
    validator: containsSymbols,
    message: PasswordValidationMessageEnum.CONTAINS_SYMBOLS,
  },
];

export const PasswordValidations = ({ password }: PasswordValidationsProps) => {
  return (
    <div className={styles.passwordValidations}>
      {validationItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.message} ${
            item.validator(password) && styles.valid
          }`}
        >
          <IoCheckmarkCircleOutline size={14}></IoCheckmarkCircleOutline>
          {item.message}
        </div>
      ))}
    </div>
  );
};
