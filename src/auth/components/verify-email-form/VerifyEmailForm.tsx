"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
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

const RESEND_OTP_COOLDOWN = 30;

export const VerifyEmailForm = () => {
  // Context
  const { authService } = useContext(ServiceContext);
  const { signUpData, setError } = useContext(AuthContext);

  // State
  const [canResend, setCanResend] = useState(false);
  const [interval, setInterval] = useState(RESEND_OTP_COOLDOWN);
  const [signupLoading, setSignupLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const router = useRouter();


  // Form
  const form = useForm<VerifyEmailFormInterface>({
    resolver: yupResolver(verifyEmailSchema),
  });

  const onSubmit = ({ otp }: VerifyEmailFormInterface) => {
    setSignupLoading(true);

    authService
      .verifyOTP({
        email: signUpData!.email,
        otp,
      })
      .then(() => {
        authService
          .signUp(signUpData!)
          .then((response) => {
            setCookie('auth-token', response.token);
            router.push("success");
          })
          .catch((error) => {
            setError(error.response.data.message);
          });
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
      .finally(() => setSignupLoading(false));
  };

  // Resend OTP
  const resendOTP = () => {
    if (canResend) {
      setOtpLoading(true);
      authService
        .generateOTP(signUpData!.email)
        .then(() => {
          setCanResend(false);
        })
        .finally(() => setOtpLoading(false));
    }
  };

  useEffect(() => {
    if (!canResend && interval > 0) {
      setTimeout(() => {
        setInterval(interval - 1);
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

        <Button
          block={true}
          size={ButtonSizeEnum.SM}
          loading={signupLoading}
          type="submit"
        >
          Create your Amazn account
        </Button>
      </form>

      <Button
        block={true}
        size={ButtonSizeEnum.SM}
        color={ButtonColorEnum.LIGHT}
        disabled={!canResend}
        loading={otpLoading}
        click={resendOTP}
      >
        Resend OTP {!canResend && `(${interval / 1000}s)`}
      </Button>
    </div>
  );
};
