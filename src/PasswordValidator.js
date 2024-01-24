

class PasswordValidator {
  validate(password, options = {}) {
    const {
      minLength = 8,
      requireUppercase = true,
      requireLowercase = true,
      requireNumbers = true,
      requireSpecialChars = true,
    } = options;

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
  }
}

const isPasswordValid = new PasswordValidator();

export default isPasswordValid.validate.bind(isPasswordValid);
