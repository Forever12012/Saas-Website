const Validation = (values) => {
  alert("");
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Field should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid Email";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.email = "Field should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.email = "Invalid Password";
  } else {
    error.password = "";
  }
  return error;
};

export default Validation;
