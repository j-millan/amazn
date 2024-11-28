import * as yup from "yup";

export function emailOrPhoneNumber(this: yup.StringSchema): yup.StringSchema {
  return this.test("emailOrPhone", "Enter a valid email address or phone number", (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10,}$/;

    if (!value) {
      return false;
    }

    return emailRegex.test(value) || phoneRegex.test(value);
  });
}
