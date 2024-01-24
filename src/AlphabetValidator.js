class AlphabetValidator {
  validate(input, length = null, required = false) {
    try {
      // Throw error for invalid input
      if (typeof input !== "string") {
        throw new Error("Invalid parameter: input must be a string.");
      }
      if (typeof required !== "boolean") {
        throw new Error("Invalid parameter: required must be a boolean.");
      }

      if (typeof length !== "number" || length <= 0) {
        throw new Error("Invalid parameter: length must be a positive number.");
      }
      // Check if the input is not empty (if required)
      const isNotEmpty = required ? input.trim() !== "" : true;

      // Check if the input contains only alphabets
      const isAlphabetic = /^[a-zA-Z]+$/.test(input);

      // Check if the input has the correct length (if specified)
      const hasCorrectLength = length ? input.length === length : true;

      // Return validation result and error message
      if (isNotEmpty && isAlphabetic && hasCorrectLength) {
        return { isValid: true, errorMessage: null };
      } else if (!isNotEmpty) {
        return { isValid: false, errorMessage: "This field is required." };
      } else if (!isAlphabetic) {
        return { isValid: false, errorMessage: "Only alphabets are allowed." };
      } else {
        return { isValid: false, errorMessage: `Length should be ${length} alphabets.` };
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isAlphabetValid = new AlphabetValidator();

export default isAlphabetValid.validate.bind(isAlphabetValid);
