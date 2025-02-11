"use server";

const Register = async (state, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log(email, password, confirmPassword);
};

export default Register;
