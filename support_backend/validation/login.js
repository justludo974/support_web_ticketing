const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Veuillez compléter ce champ";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Votre adresse est invalide";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Veuillez compléter ce champ";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};