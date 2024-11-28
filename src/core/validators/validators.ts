import * as yup from "yup";

import { emailOrPhoneNumber } from "./email-or-phone-number-validator";
import { password } from "./password-validator";

// Email or phone
yup.addMethod(yup.string, "emailOrPhoneNumber", emailOrPhoneNumber);

// Valid password
yup.addMethod(yup.string, "password", password);
