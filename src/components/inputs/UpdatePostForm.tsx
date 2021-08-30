import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { IPost, IURLParams, UpdatePostParams } from "../../@types";
import { Path } from "../../constants";
import { usePostStore } from "../../store/PostStore";
import { updatePostValidation } from "../../validations/post/updatePostValidation";
import { PostForm } from "./PostForm";

interface IProps {
  initialValues: IPost;
}

export const UpdatePostForm: React.FC<IProps> = ({ initialValues }) => {
  const { updatePost } = usePostStore();

  const history = useHistory();

  const methods = useForm<UpdatePostParams>({
    resolver: yupResolver(updatePostValidation),
    defaultValues: {
      title: initialValues?.title,
      description: initialValues?.description,
      body: initialValues?.body,
      tagList: initialValues?.tagList,
    },
  });

  const { handleSubmit, watch } = methods;
  const tagList = watch("tagList");
  const { slug } = useParams<IURLParams>();

  const onSubmit = handleSubmit(async (data) => {
    await updatePost({ ...data, tagList }, slug || "");
    history.push(Path.articles);
  });

  return (
    <>
      <FormProvider {...methods}>
        <Form noValidate onSubmit={onSubmit}>
          <PostForm
            defaultTags={
              tagList
                ? initialValues.tagList
                  ? [...tagList, ...initialValues.tagList]
                  : tagList
                : initialValues.tagList
            }
          />
        </Form>
      </FormProvider>
    </>
  );
};
