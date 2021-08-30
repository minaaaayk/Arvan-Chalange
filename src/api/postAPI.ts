import {
  CreatePostParams,
  IPost,
  IPosts,
  PaginationParams,
  UpdatePostParams,
} from "../@types";
import axios from "./axios";
import { paramsSerializer } from "./functions/paramsSerializer";

export const PostAPI = {
  getPosts: (params?: PaginationParams) =>
    axios.get<IPosts>(`/articles`, { params, paramsSerializer }),
  getPost: (slug: string) => axios.get<{ article: IPost }>(`/articles/${slug}`),

  createPost: (params: CreatePostParams) =>
    axios.post<IPost>(`/articles`, { article: params }),
  updatePost: (params: UpdatePostParams, slug: string) =>
    axios.put<IPost>(`/articles/${slug}`, { article: params }),
  deletePost: (slug: string) => axios.delete(`/articles/${slug}`),
};
