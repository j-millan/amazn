"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ServiceContext } from "@/core";
import { Button, ButtonSizeEnum, TextInput } from "@/shared";
import { AuthContext, PasswordValidations } from "@/auth";
import styles from "./SignUpForm.module.css";

interface SignUpFormInterface {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const SignUpForm = () => {
  const { authService } = useContext(ServiceContext);
  const { setSignUpData } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpFormInterface>({
    resolver: yupResolver(SignUpSchema),
  });
  const password = form.watch("password");
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormInterface> = (data) => {
    setIsLoading(true);
    setSignUpData(data);

    authService
      .generateOTP(data.email)
      .then(() => {
        router.push("verify-email");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.signUpForm}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        {/* Name input */}
        <TextInput
          label="Your name"
          name="name"
          form={form}
          placeholder="First and last name"
        />
        {/* Name input */}

        {/* Email address input */}
        <TextInput label="Email address" name="email" form={form} />
        {/* Email address input */}

        {/* Password input */}
        <div className={styles.passwordField}>
          <TextInput
            label="Password"
            name="password"
            placeholder="At least 12 characters"
            password={true}
            form={form}
          />

          {/* Validation messages */}
          <PasswordValidations password={password || ""}></PasswordValidations>
          {/* Validation messages */}
        </div>

        <TextInput
          label="Repeat password"
          name="repeatPassword"
          password={true}
          form={form}
        />
        {/* Password input */}

        <Button
          block={true}
          size={ButtonSizeEnum.SM}
          loading={isLoading}
          type="submit"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};
