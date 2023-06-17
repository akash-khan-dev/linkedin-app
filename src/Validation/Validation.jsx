import * as Yup from "yup";
const authValidation = {
  fullname: Yup.string().max(20).min(3).required("FullName is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().max(50).min(6).required("Password is required"),
  confirmpassword: Yup.string()
    .max(50)
    .min(5)
    .oneOf([Yup.ref("password"), null], "Confirm Password Must be matches")
    .required("Confirm Password is required"),
};

// for signup validation
export const SignUp = Yup.object({
  ...authValidation,
});

export const SignIn = Yup.object({
  email: authValidation.email,
  password: authValidation.password,
});
