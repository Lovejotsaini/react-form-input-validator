// src/index.js
import isPhoneNumberValid from "./PhoneNumberValidator";
import isAlphabetValid from "./AlphabetValidator";
import isEmailValid from "./EmailValidator";
import isPasswordValid from "./PasswordValidator";

const validator = {
  isPasswordValid,
  isAlphabetValid,
  isEmailValid,
  isPhoneNumberValid,
};

export default validator;
export { isPasswordValid, isAlphabetValid, isEmailValid, isPhoneNumberValid };
