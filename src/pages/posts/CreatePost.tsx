import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CreatePostParams } from "../../@types";
import { PostForm } from "../../components/inputs/PostForm";
import { Path } from "../../constants";
import { usePostStore } from "../../store/PostStore";
import { createPostValidation } from "../../validations/post/createPostValidation";

export const CreatePost: React.FC = () => {
  const { createPost } = usePostStore();
  const history = useHistory();
  const methods = useForm<CreatePostParams>({
    resolver: yupResolver(createPostValidation),
  });
  const { handleSubmit, watch } = methods;
  const tagList = watch("tagList");

  const onSubmit = handleSubmit(async (data) => {
    await createPost({ ...data, tagList });
    history.push(Path.articles);
  });

  return (
    <>
      <FormProvider {...methods}>
        <Form noValidate onSubmit={onSubmit}>
          <PostForm defaultTags={tagList} />
        </Form>
      </FormProvider>
    </>
  );
};
