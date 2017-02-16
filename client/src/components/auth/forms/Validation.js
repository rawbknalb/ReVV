export const validate = values => {
  const errors = {};
  const { email, password, passwordConfirm } = values;
  if (!email) {
    errors.email = "Please enter an email adress";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!password) {
    errors.password = "Please enter a password";
  } else if (password.length < 8) {
    errors.password = "Your password must be 8 characters or less";
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  } else if (passwordConfirm.length < 8) {
    errors.passwordConfirm = "Your password must be 8 characters or less";
  }
  if (password && passwordConfirm && password !== passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match. Please check again.";
  }
  return errors;
};
