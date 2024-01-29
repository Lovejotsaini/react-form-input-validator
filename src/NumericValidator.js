class NumericValidator {
  validate(input, required = false, maxLength = Infinity) {
    try {
      // Throw error for invalid input
      if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid parameter: input must be a string or number.");
      }
      if (typeof required !== "boolean") {
        throw new Error("Invalid parameter: required must be a boolean.");
      }
      if (typeof maxLength !== "number" || maxLength < 0) {
        throw new Error("Invalid parameter: maxLength must be a non-negative number.");
      }

      // Convert input to string for consistent validation
      const inputString = String(input);

      // Check if the input is not empty (if required)
      const isNotEmpty = required ? inputString.trim() !== "" : true;

      // Check if the input consists only of numeric characters
      const isNumericOnly = /^[0-9]+$/.test(inputString);

      // Check if the length is less than or equal to maxLength
      const isLengthValid = inputString.length <= maxLength;

      // Return validation result and error message
      if (isNotEmpty && isNumericOnly && isLengthValid) {
        return { isValid: true, errorMessage: null };
      } else if (!isNotEmpty) {
        return { isValid: false, errorMessage: "This field is required." };
      } else if (!isNumericOnly) {
        return { isValid: false, errorMessage: "Only numeric characters are allowed." };
      } else {
        return {
          isValid: false,
          errorMessage: `Length should be less than or equal to ${maxLength}.`,
        };
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isNumeric = new NumericValidator();

export default isNumeric.validate.bind(isNumeric);
