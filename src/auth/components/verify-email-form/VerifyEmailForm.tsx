"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, ButtonColorEnum, ButtonSizeEnum, TextInput } from "@/shared";
import styles from "./VerifyEmailForm.module.css";

interface VerifyEmailFormInterface {
  otp: string;
}

const verifyEmailSchema = yup
  .object({
    otp: yup.string().required().max(6).min(6),
  })
  .required();

export const VerifyEmailForm = () => {
  const form = useForm<VerifyEmailFormInterface>({
    resolver: yupResolver(verifyEmailSchema),
  });

  const onSubmit = (data: VerifyEmailFormInterface) => {
    console.debug(data);
  };

  return (
    <div className={styles.verifyEmailForm}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <TextInput label="Enter OTP" name="otp" maxLength={6} form={form} />

        <Button block={true} size={ButtonSizeEnum.SM}>
          Create your Amazn account
        </Button>
      </form>

      <Button
        block={true}
        size={ButtonSizeEnum.SM}
        color={ButtonColorEnum.LIGHT}
      >
        Resend OTP
      </Button>
    </div>
  );
};
