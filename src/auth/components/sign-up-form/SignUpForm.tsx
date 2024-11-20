'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, ButtonSizeEnum, TextInput } from "@/shared";
import styles from "./SignUpForm.module.css";

interface SignUpFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  repeatPassword: yup.string().required(),
});

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInterface>({ resolver: yupResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpFormInterface> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.signUpForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="First name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <TextInput
          label="Last name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
        <TextInput
          label="Email address"
          name="email"
          register={register}
          error={errors.email}
        />
        <TextInput
          label="Password"
          name="password"
          register={register}
          error={errors.password}
        />
        <TextInput
          label="Repeat password"
          name="password"
          register={register}
          error={errors.repeatPassword}
        />

        <Button block={true} size={ButtonSizeEnum.SM}>
          Create account
        </Button>
      </form>
    </div>
  );
};
