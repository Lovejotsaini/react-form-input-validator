// // src/PhoneNumberValidator.js

class PhoneNumberValidator {
  validate(phoneNumber, length = 10, required = false) {
    // Check if the phoneNumber is not empty (if required)
    const isNotEmpty = required ? phoneNumber.trim() !== "" : true;

    // Check if the phoneNumber is a number
    const isNumeric = /^\d+$/.test(phoneNumber);

    // Check if the phoneNumber has the correct length
    const hasCorrectLength = phoneNumber.length === length;

    // Return validation result and error message
    if (isNotEmpty && isNumeric && hasCorrectLength) {
      return { isValid: true, errorMessage: null };
    } else if (!isNotEmpty) {
      return { isValid: false, errorMessage: "This field is required." };
    } else if (!isNumeric) {
      return { isValid: false, errorMessage: "Only numbers are allowed." };
    } else {
      return { isValid: false, errorMessage: `Number should be ${length} digits.` };
    }
  }
}

const isPhoneNumberValid = new PhoneNumberValidator();

export default isPhoneNumberValid.validate.bind(isPhoneNumberValid);
