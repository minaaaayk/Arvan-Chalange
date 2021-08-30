import * as yup from "yup";

export const updatePostValidation = yup.object().shape({
  title: yup.string().required("Required field"),
  description: yup.string(),
  body: yup.string(),
  tagList: yup.array().of(yup.string()),
});
