// src/AsciiValidator.js

class AsciiValidator {
  validate(input, required = false) {
    // Check if the input is not empty (if required)
    const isNotEmpty = required ? input.trim() !== "" : true;

    // Check if the input consists only of ASCII characters
    const isAsciiOnly = /^[\x00-\x7F]+$/.test(input);

    // Return validation result and error message
    if (isNotEmpty && isAsciiOnly) {
      return { isValid: true, errorMessage: null };
    } else if (!isNotEmpty) {
      return { isValid: false, errorMessage: "This field is required." };
    } else {
      return { isValid: false, errorMessage: "Only ASCII characters are allowed." };
    }
  }
}

const isAscii = new AsciiValidator();

export default isAscii.validate.bind(isAscii);
