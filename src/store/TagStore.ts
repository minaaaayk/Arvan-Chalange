import create from "zustand";
import { IErrors, IState, ITags } from "../@types";
import { TagAPI } from "../api/tagAPI";
import { initialState } from "./initialState";

type Tags = IState<ITags>;

interface ITagsStore extends Tags {
  getTags: () => Promise<void>;
  appendTag: (newTag: string) => void;
}
const initialTagsStore: Tags = {
  ...initialState,
  data: {
    tags: [],
  },
};

export const useTagsStore = create<ITagsStore>((set, get) => ({
  ...initialTagsStore,
  getTags: async () => {
    try {
      set((state) => ({ ...state, isLoading: true }));
      const res = await TagAPI.getTags();
      set((state) => ({ ...state, data: res.data, isLoading: false }));
    } catch (error) {
      set((state) => ({ ...state, error: error as IErrors, isLoading: false }));
    }
  },

  appendTag: (newTag) => {
    const { data: tagList } = get();
    set((state) => ({
      ...state,
      data: { tags: [...tagList.tags, newTag] },
      isLoading: false,
    }));
  },
}));
