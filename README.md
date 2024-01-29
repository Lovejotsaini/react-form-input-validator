# React Form Input Validator

This package provides a set of validation functions for common use cases. Each function helps you validate specific types of input, such as passwords, phone numbers, emails, and more.

## Installation

```bash
 npm i react-form-input-validator

```

## Usage

#### ES6

```javascript
// Importing the validation functions from the package
import {
  isPasswordValid,
  isAlphabetValid,
  isPhoneNumberValid,
  isEmailValid,
  isAscii,
  isAlphanumeric,
} from "react-form-input-validator";

// Validate a password
const passwordResult = isPasswordValid("SecureP@ss123", {
  minLength: 10,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
});

// Validate an alphabet string
const alphabetResult = isAlphabetValid("AbCdEfG");

// Validate a phone number
const phoneNumberResult = isPhoneNumberValid("1234567890");

// Validate an email address
const emailResult = isEmailValid("user@example.com");

// Validate a string containing only ASCII characters
const asciiResult = isAscii("Hello123");

// Validate a string containing only alphanumeric characters
const alphanumericResult = isAlphanumeric("Alpha123");
```

## Return result

| Functions          | Returns                                      |
| ------------------ | -------------------------------------------- |
| isPasswordValid    | { isValid: boolean, errorMessage: "string" } |
| isAlphabetValid    | { isValid: boolean, errorMessage: "string" } |
| isPhoneNumberValid | { isValid: boolean, errorMessage: "string" } |
| isEmailValid       | { isValid: boolean, errorMessage: "string" } |
| isAscii            | { isValid: boolean, errorMessage: "string" } |
| isAlphanumeric     | { isValid: boolean, errorMessage: "string" } |
| isNumeric          | { isValid: boolean, errorMessage: "string" } |

## List of validator functions available

|     Functions      |                        #Descriptions                         |                      #Parameters                       |                                                   #Defaults                                                   |
| :----------------: | :----------------------------------------------------------: | :----------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|  isPasswordValid   |       Checks if the password meets specified criteria.       |           password: string, options: object            | minLength: 8, requireUppercase: true, requireLowercase: true, requireNumbers: true, requireSpecialChars: true |
|  isAlphabetValid   |  Checks if the input consists only of alphabet characters.   |   input: string, length?: number, required: boolean    |                                                 length: null                                                  |
| isPhoneNumberValid |             Checks if the phone number is valid.             | phoneNumber: string, length: number, required: boolean |                                                  length: 10                                                   |
|    isEmailValid    |            Checks if the email address is valid.             |            email: string, required: boolean            |                                                required: false                                                |
|      isAscii       |    Checks if the input consists only of ASCII characters.    |            input: string, required: boolean            |                                                required: false                                                |
|   isAlphanumeric   | Checks if the input consists only of alphanumeric characters |            input: string, required: boolean            |                                                required: false                                                |
|     isNumeric      |   Checks if the input consists only of numeric characters    |    input: string, required: boolean ,length: number    |

## Documentation

## Feedback and Contributions

We're eager to hear your feedback and suggestions for react-form-input-validator. If you encounter any issues or have ideas for improvements, please open an issue.

[Documentation](https://github.com/Lovejotsaini/react-input-validator)
