class AlphanumericValidator {
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

      // Check if the input consists only of alphanumeric characters
      const isAlphanumericOnly = /^[a-zA-Z0-9]+$/.test(input);

      // Return validation result and error message
      if (isNotEmpty && isAlphanumericOnly) {
        return { isValid: true, errorMessage: null };
      } else if (!isNotEmpty) {
        return { isValid: false, errorMessage: "This field is required." };
      } else {
        return { isValid: false, errorMessage: "Only alphanumeric characters are allowed." };
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isAlphanumeric = new AlphanumericValidator();

export default isAlphanumeric.validate.bind(isAlphanumeric);
