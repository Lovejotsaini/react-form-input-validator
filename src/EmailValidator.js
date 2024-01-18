// src/EmailValidator.js
const isEmailValid = (email, required = false) => {
  // Check if the email is not empty (if required)
  const isNotEmpty = required ? email.trim() !== "" : true;

  // Regular expression for a more comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Return validation result and error message
  if (isNotEmpty && emailRegex.test(email)) {
    return { isValid: true, errorMessage: null };
  } else if (!isNotEmpty) {
    return { isValid: false, errorMessage: "This field is required." };
  } else {
    return { isValid: false, errorMessage: "Invalid email format." };
  }
};

export default isEmailValid;
