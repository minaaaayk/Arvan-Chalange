import create from "zustand";
import {
  CreatePostParams,
  IErrors,
  IEvent,
  IPost,
  IPosts,
  IState,
  PaginationParams,
  UpdatePostParams,
} from "../@types";
import { PostAPI } from "../api";
import { initialState } from "./initialState";

type Posts = IState<IPosts> & {
  success?: string;
};

interface IPostsStore extends Posts {
  getPosts: (params?: PaginationParams) => Promise<void>;
  getPost: (slug: string, event?: IEvent) => Promise<IPost | undefined>;
  createPost: (params: CreatePostParams) => Promise<void>;
  updatePost: (params: UpdatePostParams, slug: string) => Promise<void>;
  deletePost: (slug: string) => Promise<void>;
}

const initialPostsState: Posts = {
  ...initialState,
  data: {
    articles: [],
    articlesCount: 0,
  },
};

export const usePostStore = create<IPostsStore>((set, get) => ({
  ...initialPostsState,
  getPosts: async (params) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await PostAPI.getPosts(params);
      set((state) => ({ ...state, data: res.data, isLoading: false }));
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },

  getPost: async (slug: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await PostAPI.getPost(slug);
      set((state) => ({ ...state, isLoading: false }));
      return res.data?.article;
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },

  createPost: async (params: CreatePostParams) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      await PostAPI.createPost(params);

      set((state) => ({
        ...state,
        isLoading: false,
        success: "Article created successfuly",
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },
  updatePost: async (params: UpdatePostParams, slug: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      await PostAPI.updatePost(params, slug);

      set((state) => ({
        ...state,
        isLoading: false,
        success: "Article updated successfuly",
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },

  deletePost: async (slug: string) => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      await PostAPI.deletePost(slug);

      set((state) => ({
        ...state,
        isLoading: false,
        success: "Article deleted successfuly",
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },
}));
