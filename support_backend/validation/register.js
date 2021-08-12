const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Veuillez entree un nom";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Veuillez entrer une adresse mail";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "votre adresse est invalide";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Veuillez entrer un mot de passe";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Veuillez confirmer votre mot de passe";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit comporter au moins 6 caracteres";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Les mots de passe ne correspondent pas";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};