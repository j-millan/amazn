import * as yup from "yup";
import { emailOrPhoneNumber } from "./email-or-phone-number";

// Email or phone
yup.addMethod(yup.string, "emailOrPhoneNumber", emailOrPhoneNumber);
