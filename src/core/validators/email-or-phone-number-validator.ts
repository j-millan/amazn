import * as yup from "yup";

const ERROR_MESSAGE = "Enter a valid email address or phone number";

export function emailOrPhoneNumber(this: yup.StringSchema): yup.StringSchema {
  return this.test("emailOrPhone", ERROR_MESSAGE, (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10,}$/;

    if (!value) {
      return false;
    }

    return emailRegex.test(value) || phoneRegex.test(value);
  });
}
