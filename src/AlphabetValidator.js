// // src/AlphabetValidator.js
// const isAlphabetValid = (input, length = null, required = false) => {
//   // Check if the input is not empty (if required)
//   const isNotEmpty = required ? input.trim() !== "" : true;

//   // Check if the input contains only alphabets
//   const isAlphabetic = /^[a-zA-Z]+$/.test(input);

//   // Check if the input has the correct length (if specified)
//   const hasCorrectLength = length ? input.length === length : true;

//   // Return validation result and error message
//   if (isNotEmpty && isAlphabetic && hasCorrectLength) {
//     return { isValid: true, errorMessage: null };
//   } else if (!isNotEmpty) {
//     return { isValid: false, errorMessage: "This field is required." };
//   } else if (!isAlphabetic) {
//     return { isValid: false, errorMessage: "Only alphabets are allowed." };
//   } else {
//     return { isValid: false, errorMessage: `Length should be ${length} alphabets.` };
//   }
// };

// export default isAlphabetValid;

class AlphabetValidator {
  validate(input, length = null, required = false) {
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
  }
}

const isAlphabetValid = new AlphabetValidator();

export default isAlphabetValid.validate.bind(isAlphabetValid);
