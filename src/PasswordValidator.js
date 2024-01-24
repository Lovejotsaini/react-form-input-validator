class PasswordValidator {
  validate(password, options = {}) {
    try {
      const {
        minLength = 8,
        requireUppercase = true,
        requireLowercase = true,
        requireNumbers = true,
        requireSpecialChars = true,
      } = options;

      // Throw errors for invalid parameters
      if (typeof password !== "string") {
        throw new Error("Invalid parameter: password must be a string.");
      }

      if (typeof minLength !== "number" || minLength <= 0) {
        throw new Error("Invalid parameter: minLength must be a positive number.");
      }

      if (typeof options !== "object") {
        throw new Error("Invalid parameter: options must be an object.");
      }

      if (
        typeof requireUppercase !== "boolean" ||
        typeof requireLowercase !== "boolean" ||
        typeof requireNumbers !== "boolean" ||
        typeof requireSpecialChars !== "boolean"
      ) {
        throw new Error("Invalid parameter: options must be an object with boolean properties.");
      }

      // Check length
      if (password.length < minLength) {
        return {
          isValid: false,
          errorMessage: `Password must be at least ${minLength} characters.`,
        };
      }

      // Check uppercase letters
      if (requireUppercase && !/[A-Z]/.test(password)) {
        return {
          isValid: false,
          errorMessage: "Password must contain at least one uppercase letter.",
        };
      }

      // Check lowercase letters
      if (requireLowercase && !/[a-z]/.test(password)) {
        return {
          isValid: false,
          errorMessage: "Password must contain at least one lowercase letter.",
        };
      }

      // Check numbers
      if (requireNumbers && !/\d/.test(password)) {
        return {
          isValid: false,
          errorMessage: "Password must contain at least one number.",
        };
      }

      // Check special characters
      if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return {
          isValid: false,
          errorMessage: "Password must contain at least one special character.",
        };
      }

      // If all criteria are met, the password is valid
      return { isValid: true, errorMessage: null };
    } catch (error) {
      // Handle unexpected errors
      console.error("Validation error:", error.message);
      return { isValid: false, errorMessage: "Validation error occurred." };
    }
  }
}

const isPasswordValid = new PasswordValidator();

export default isPasswordValid.validate.bind(isPasswordValid);
