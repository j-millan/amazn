"use client";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie } from "cookies-next";
import * as yup from "yup";

import { Button, ButtonSizeEnum, TextInput } from "@/shared";
import { ServiceContext } from "@/core";
import { AuthContext } from "@/auth/providers/AuthProvider";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";

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

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormInterface>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInterface) => {
    setIsLoading(true);

    authService
      .signIn(data)
      .then((response) => {
        setCookie('auth-token', response.token);
        router.push("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.loginForm}>
      {/* Form */}
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <TextInput
          label="Email or mobile phone number"
          name="email"
          form={form}
        />
        <TextInput
          label="Password"
          name="password"
          password={true}
          form={form}
        />
        <Button block={true} size={ButtonSizeEnum.SM} loading={isLoading} type="submit">
          Log in
        </Button>
      </form>
      {/* Form */}
    </div>
  );
};
