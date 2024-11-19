"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button, ButtonColorEnum, ButtonSizeEnum, TextInput } from "@/shared";
import styles from "./page.module.css";
import { yupResolver } from "@hookform/resolvers/yup";

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

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({ resolver: yupResolver(LOGIN_SCHEMA) });
  const onSubmit: SubmitHandler<LoginFormInterface> = (data) => {
    console.debug(data);
    console.debug(errors.email);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

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
      {/* Form *
      
      {/* Notice */}
      <p className={styles.notice}>
        By continuing, you agree to Amazn&apos;s&nbsp;
        <a href="#" className="link">
          Conditions of Use
        </a>{" "}
        and&nbsp;
        <a href="#" className="link">
          Privacy Notice
        </a>
        .
      </p>
      {/* Notice */}

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.singUpMsg}>
          <div className={styles.crossline}></div>
          <span className={styles.text}>New to Amazn?</span>
          <div className={styles.crossline}></div>
        </div>
        <Button
          block={true}
          size={ButtonSizeEnum.SM}
          color={ButtonColorEnum.LIGHT}
        >
          Create your Amazn account
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
