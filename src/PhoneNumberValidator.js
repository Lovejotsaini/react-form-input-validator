class PhoneNumberValidator {
  validate(phoneNumber, length = 10, required = false) {
    try {
      // Check if the phoneNumber is not empty (if required)
      const isNotEmpty = required ? phoneNumber.trim() !== "" : true;

      // Check if the phoneNumber is a number
      const isNumeric = /^\d+$/.test(phoneNumber);

      // Check if the phoneNumber has the correct length
      const hasCorrectLength = phoneNumber.length === length;

      // Throw errors for invalid parameters
      if (typeof phoneNumber !== "string") {
        throw new Error("Invalid parameter: phoneNumber must be a string.");
      }

      if (typeof length !== "number" || length <= 0) {
        throw new Error("Invalid parameter: length must be a positive number.");
      }

      if (typeof required !== "boolean") {
        throw new Error("Invalid parameter: required must be a boolean.");
      }

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
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isPhoneNumberValid = new PhoneNumberValidator();

export default isPhoneNumberValid.validate.bind(isPhoneNumberValid);
