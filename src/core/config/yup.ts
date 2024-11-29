import * as yup from "yup";

import { emailOrPhoneNumber } from "../validators/email-or-phone-number-validator";
import { password } from "../validators/password-validator";

// Custom error messages
yup.setLocale({
  mixed: {
    required: "This field is required",
  },
  string: {
    email: "Enter a valid email address",
  }
});

// Email or phone
yup.addMethod(yup.string, "emailOrPhoneNumber", emailOrPhoneNumber);

// Valid password
yup.addMethod(yup.string, "password", password);
