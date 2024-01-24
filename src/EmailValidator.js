// // src/EmailValidator.js

class EmailValidator {
  validate(email, required = false) {
    this.email = email;
    this.required = required;
    // Check if the email is not empty (if required)
    const isNotEmpty = this.required ? this.email.trim() !== "" : true;

    // Regular expression for a more comprehensive email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Return validation result and error message
    if (isNotEmpty && emailRegex.test(this.email)) {
      return { isValid: true, errorMessage: null };
    } else if (!isNotEmpty) {
      return { isValid: false, errorMessage: "This field is required." };
    } else {
      return { isValid: false, errorMessage: "Invalid email format." };
    }
  }
}

const isEmailValid = new EmailValidator();

export default isEmailValid.validate;
