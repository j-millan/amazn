"use client";

import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GoAlert } from "react-icons/go";

import { ServiceContext } from "@/core";
import styles from "./LoginForm.module.css";
import { Button, ButtonSizeEnum, TextInput } from "@/shared";

interface LoginFormInterface {
  email: string;
  password: string;
}

const LOGIN_SCHEMA = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginForm = () => {
  const [error, setError] = useState([]);
  const { authService } = useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({ resolver: yupResolver(LOGIN_SCHEMA) });

  const onSubmit: SubmitHandler<LoginFormInterface> = (data) => {
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
      {/* Error */}
      {!!error.length && (
        <div className={styles.error}>
          <GoAlert size={24} />
          <div className={styles.errors}>
            <span className={styles.title}>There was a problem</span>
            {error.map((err) => (
              <span className={styles.errorMessage} key={err}>
                {err}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Error */}

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
