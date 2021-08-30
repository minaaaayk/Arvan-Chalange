import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost, IURLParams } from "../../@types";
import { UpdatePostForm } from "../../components/inputs/UpdatePostForm";
import { Parsing } from "../../components/wrappers/Parsing";
import { usePostStore } from "../../store/PostStore";

export const UpdatePost: React.FC = () => {
  const { getPost, isLoading } = usePostStore();
  const { slug } = useParams<IURLParams>();

  const [initialValues, setInitialValues] = useState<IPost | undefined>();

  const fetchPostsCallback = useCallback(async () => {
    const value = await getPost(slug || "");
    setInitialValues(value);
  }, [slug, getPost]);

  useEffect(() => {
    fetchPostsCallback();
  }, [fetchPostsCallback]);

  return (
    <Parsing isLoading={isLoading}>
      {initialValues && <UpdatePostForm initialValues={initialValues} />}
    </Parsing>
  );
};
