'use client';

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  repeatPassword: yup.string().required(),
});

export const SignUpForm = () => {
  const { setSignUpData } = useContext(AuthContext);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInterface>({ resolver: yupResolver(SignUpSchema) });

  const password = watch('password');

  const onSubmit: SubmitHandler<SignUpFormInterface> = (data) => {
    setSignUpData(data);
  };

  return (
    <div className={styles.signUpForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Name input */}
        <TextInput
          label="Your name"
          name="name"
          register={register}
          error={errors.name}
          placeholder="First and last name"
        />
        {/* Name input */}

        {/* Email address input */}
        <TextInput
          label="Email address"
          name="email"
          register={register}
          error={errors.email}
        />
        {/* Email address input */}

        {/* Password input */}
        <TextInput
          label="Password"
          name="password"
          placeholder="At least 12 characters"
          password={true}
          register={register}
          error={errors.password}
        />

          {/* Validation messages */}
          <PasswordValidations
            password={password || ''}
          ></PasswordValidations>
          {/* Validation messages */}

        <TextInput
          label="Repeat password"
          name="repeatPassword"
          password={true}
          register={register}
          error={errors.repeatPassword}
        />
        {/* Password input */}

        <Button block={true} size={ButtonSizeEnum.SM}>
          Verify email address
        </Button>
      </form>
    </div>
  );
};
