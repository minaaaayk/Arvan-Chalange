import * as yup from "yup";

export const createPostValidation = yup.object().shape({
  title: yup.string().required("Required field"),
  description: yup.string().required("Required field"),
  body: yup.string().required("Required field"),
  tagList: yup.array().of(yup.string()),
});
