class AsciiValidator {
  validate(input, required = false) {
    try {
      // Throw error for invalid input
      if (typeof input !== "string") {
        throw new Error("Invalid parameter: input must be a string.");
      }
      if (typeof required !== "boolean") {
        throw new Error("Invalid parameter: required must be a boolean.");
      }
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
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isAscii = new AsciiValidator();

export default isAscii.validate.bind(isAscii);
