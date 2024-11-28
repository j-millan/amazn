import * as yup from "yup";

declare module "yup" {
  interface StringSchema<TType, TContext, TDefault, TFlags>
    extends yup.StringSchema<TType, TContext, TDefault, TFlags> {
    emailOrPhoneNumber(): this;
    password(): this;
  }
}
