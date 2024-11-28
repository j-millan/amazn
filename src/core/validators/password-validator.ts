import * as yup from "yup";

const ERROR_MESSAGE =
  "the password doesn't conform to the specified constraints";

export function password(this: yup.StringSchema): yup.StringSchema {
  return this.test("password", ERROR_MESSAGE, (value) => {
    if (!value) {
      return false;
    }

    return (
      containsUppercasAndLowercase(value) &&
      containsNumbers(value) &&
      containsSymbols(value) &&
      hasValidLength(value)
    );
  });
}

export function containsUppercasAndLowercase(value: string): boolean {
  const regex = /(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})/;
  return regex.test(value);
}

export function containsNumbers(value: string): boolean {
  const regex = /(?=(.*\d){2,})/;
  return regex.test(value);
}

export function containsSymbols(value: string): boolean {
  const regex = /(?=(.*[@#$%^&*\(\)]){2,})/;
  return regex.test(value);
}

export function hasValidLength(value: string): boolean {
  return value.length >= 12 && value.length <= 32;
}
