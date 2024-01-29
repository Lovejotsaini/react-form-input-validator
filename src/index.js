// src/index.js
import isPhoneNumberValid from "./PhoneNumberValidator";
import isAlphabetValid from "./AlphabetValidator";
import isEmailValid from "./EmailValidator";
import isPasswordValid from "./PasswordValidator";
import isAlphanumeric from "./AlphaNumericValidator";
import isAscii from "./AsciiValidator";
import isNumeric from "./NumericValidator";

const validator = {
  isPasswordValid,
  isAlphabetValid,
  isEmailValid,
  isPhoneNumberValid,
  isAlphanumeric,
  isAscii,
  isNumeric,
};

export default validator;
export { isPasswordValid, isAlphabetValid, isEmailValid, isPhoneNumberValid, isNumeric };
