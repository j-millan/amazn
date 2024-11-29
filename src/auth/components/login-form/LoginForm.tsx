"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, ButtonSizeEnum, TextInput } from "@/shared";
import { ServiceContext } from "@/core";
import { AuthContext } from "@/auth/providers/AuthProvider";
import "@/core/validators/validators";
import styles from "./LoginForm.module.css";

interface LoginFormInterface {
  email: string;
  password: string;
}

const loginSchema = yup
  .object({
    email: yup.string().required().emailOrPhoneNumber(),
    password: yup.string().required(),
  })
  .required();

export const LoginForm = () => {
  const { setError } = useContext(AuthContext);
  const { authService } = useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: LoginFormInterface) => {
    authService
      .signIn(data)
      .then((response) => {
        console.debug(response);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className={styles.loginForm}>
      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Email or mobile phone number"
          name="email"
          register={register}
          error={errors.email}
        />
        <TextInput
          label="Password"
          name="password"
          password={true}
          register={register}
          error={errors.password}
        />
        <Button block={true} size={ButtonSizeEnum.SM}>
          Log in
        </Button>
      </form>
      {/* Form */}
    </div>
  );
};
