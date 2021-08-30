import { IPage } from "../@types";
import { Path } from "../constants";
import { CreatePost } from "../pages/posts/CreatePost";
import { Posts } from "../pages/posts/Posts";
import { UpdatePost } from "../pages/posts/UpdatePost";

export const pages: IPage[] = [
  {
    title: "Post",
    accordion: [
      {
        title: "All Article",
        path: Path.articles,
        component: Posts,
        innerPages: [
          { path: `${Path.articles}/page/:page`, component: Posts },
          {
            path: `${Path.editArticle}/:slug`,
            component: UpdatePost,
          },
        ],
      },
      {
        title: "New Article",
        path: Path.createArticle,
        component: CreatePost,
      },
    ],
  },
];
