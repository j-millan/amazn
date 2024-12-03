"use client";

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ServiceContext } from "@/core";
import { Button, ButtonColorEnum, ButtonSizeEnum, TextInput } from "@/shared";
import { AuthContext } from "@/auth/providers/AuthProvider";
import styles from "./VerifyEmailForm.module.css";

interface VerifyEmailFormInterface {
  otp: string;
}

const verifyEmailSchema = yup
  .object({
    otp: yup.string().required().max(6).min(6),
  })
  .required();

const RESEND_OTP_COOLDOWN = 30 * 1000;

export const VerifyEmailForm = () => {
  // Context
  const { authService } = useContext(ServiceContext);
  const { signUpData, setError } = useContext(AuthContext);

  // State
  const [canResend, setCanResend] = useState(false);
  const [interval, setInterval] = useState(RESEND_OTP_COOLDOWN);

  // Form
  const form = useForm<VerifyEmailFormInterface>({
    resolver: yupResolver(verifyEmailSchema),
  });

  const onSubmit = ({ otp }: VerifyEmailFormInterface) => {
    authService
      .verifyOTP({
        email: signUpData!.email,
        otp,
      })
      .then(() => {
        authService
          .signUp(signUpData!)
          .then((response) => {
            console.debug(response);
          })
          .catch((error) => {
            setError(error.response.data.message);
          });
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  // Resend OTP
  const resendOTP = () => {
    if (canResend) {
      authService.generateOTP(signUpData!.email).then(() => {
        setCanResend(false);
      });
    }
  };

  useEffect(() => {
    if (!canResend && interval > 0) {
      setTimeout(() => {
        setInterval(interval - 1000);
      }, 1000);
    } else {
      setCanResend(true);
      setInterval(RESEND_OTP_COOLDOWN);
    }
  }, [interval, canResend]);

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
        disabled={!canResend}
        click={resendOTP}
      >
        Resend OTP {!canResend && `(${interval / 1000}s)`}
      </Button>
    </div>
  );
};
