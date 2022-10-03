export const validate = (values) => {
  const errors = {};
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let phonRegex = /^\+?(88)?0?1[3456789][0-9]{8}\b/g;
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.phone) {
    errors.phone = "Phone  is required";
  }
  if (!emailRegex.test(values.email)) {
    errors.email = "Email is not valid";
  }
  if (!phonRegex.test(values.phone)) {
    errors.phone = "Phone  is not valid";
  }
  return errors;
};
