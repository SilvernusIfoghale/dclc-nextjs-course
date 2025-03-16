"use server";

import { RegisterFormSchema } from "../lib/rules";

const Register = async (state, formData) => {
  //await new Promise((resolve)=> setTimeout(resolve, 3000));

  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }
  console.log(validatedFields);
};

export default Register;
