import { PostsTableHeader } from "data/tableHeaders/PostsTableHeader";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IURLParams } from "../../@types";
import { DeletePostModal } from "../../components/modalBoxes/DeletePostModal";
import { PostRow } from "../../components/rows/PostRow";
import { TableCard } from "../../components/TableCard";
import { TableMainContent } from "../../components/tableComponents/TableMainContent";
import { Parsing } from "../../components/wrappers/Parsing";
import { useModal } from "../../hooks";
import { usePostStore } from "../../store/PostStore";

export const Posts: React.FC = () => {
  const { page: offset } = useParams<IURLParams>();
  const {
    getPosts,
    deletePost,
    data: posts,
    isLoading,
    success,
  } = usePostStore();
  const [slug, setSlug] = useState<string>("");

  const {
    isVisible: isModalDeleteVisible,
    toggle: toggleDeleteModal,
  } = useModal();

  const onDeleteAccept = async () => {
    toggleDeleteModal();
    document.body.style.overflow = "auto";
    await deletePost(slug);
    await getPosts({ offset: offset ? Number(offset) * 10 : 0, limit: 10 });
  };

  const onDeleteClick = (item: string) => {
    setSlug(item);
    toggleDeleteModal();
  };

  const fetchPostsCallback = useCallback(async () => {
    await getPosts({ offset: offset ? Number(offset) * 10 : 0, limit: 10 });
  }, [offset, getPosts]);

  useEffect(() => {
    fetchPostsCallback();
  }, [fetchPostsCallback]);

  return (
    <TableCard
      title="All Posts"
      total={posts.articlesCount}
      offset={offset ? Number(offset) : 0}
      limit={10}
      message={success}
    >
      <Parsing isLoading={isLoading}>
        <TableMainContent tableHeader={PostsTableHeader}>
          {posts?.articles?.map((post, index) => (
            <PostRow
              post={post}
              index={index}
              onDeleteClick={onDeleteClick}
              offset={offset ? Number(offset) : 0}
              limit={10}
            />
          ))}
        </TableMainContent>
      </Parsing>

      {isModalDeleteVisible && slug !== "" && (
        <DeletePostModal
          onClose={toggleDeleteModal}
          onAccept={onDeleteAccept}
        />
      )}
    </TableCard>
  );
};
