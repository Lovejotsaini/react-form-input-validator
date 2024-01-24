# React Input Validator

This package provides a set of validation functions for common use cases. Each function helps you validate specific types of input, such as passwords, phone numbers, emails, and more.

## Installation

```bash
  npm i react-input-validator

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
} from "react-input-validator";

// Validate a password
const passwordResult = isPasswordValid("SecureP@ss123", {
  minLength: 10,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
});
//Returns:

//1- Check length
//  {
//       isValid: false,
//       errorMessage: `Password must be at least ${minLength} characters.`,
//   }
//2- Check uppercase letters
// {
//     isValid: false,
//     errorMessage: "Password must contain at least one uppercase letter.",
//   }
//3- Check lowercase letters
// {
//     isValid: false,
//    errorMessage: "Password must contain at least one lowercase letter.",
//   }
//4- Check numbers
// {
//      isValid: false,
//      errorMessage: "Password must contain at least one number.",
//   }
//5-  Check special characters
// {
//       isValid: false,
//       errorMessage: "Password must contain at least one special character.",
//     }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

## List of validator functions available

|     Functions      |                        #Descriptions                         |                      #Parameters                       |                                                   #Defaults                                                    |
| :----------------: | :----------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
|  isPasswordValid   |       Checks if the password meets specified criteria.       |           password: string, options: object            | minLength: 8, requireUppercase: true, requireLowercase: true, requireNumbers: true, requireSpecialChars: false |
|  isAlphabetValid   |  Checks if the input consists only of alphabet characters.   |   input: string, length?: number, required: boolean    |                                                  length: null                                                  |
| isPhoneNumberValid |             Checks if the phone number is valid.             | phoneNumber: string, length: number, required: boolean |                                                   length: 10                                                   |
|    isEmailValid    |            Checks if the email address is valid.             |            email: string, required: boolean            |                                                      N/A                                                       |
|      isAscii       |    Checks if the input consists only of ASCII characters.    |            input: string, required: boolean            |                                                      N/A                                                       |
|   isAlphanumeric   | Checks if the input consists only of alphanumeric characters |            input: string, required: boolean            |                                                      N/A                                                       |

## Documentation

[Documentation](https://github.com/Lovejotsaini/react-input-validator)
