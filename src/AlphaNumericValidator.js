// src/AlphanumericValidator.js
const isAlphanumeric = (input, required = false) => {
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
};

export default isAlphanumeric;
