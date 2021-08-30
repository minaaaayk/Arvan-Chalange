import * as yup from "yup";

export const registerValidation = yup.object().shape({
  username: yup.string().required("Required field"),
  email: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
});
