import create from "zustand";
import {
  IErrors,
  IEvent,
  IState,
  IUser,
  LoginParams,
  RegisterParams,
} from "../@types";
import { AuthAPI } from "../api";
import { initialState } from "./initialState";
import { persist } from "./persist";

type User = IState<IUser>;

interface IAuthStore extends User {
  login: (params: LoginParams, event: IEvent) => Promise<void>;
  register: (params: RegisterParams, event: IEvent) => Promise<void>;

  logout: () => void;
  isLogin: () => boolean;
}

const initialAuthState: User = {
  ...initialState,
  data: {
    email: "",
    token: "",
    username: "",
    bio: null,
    image: null,
    createdAt: "",
    updatedAt: "",
    id: 0,
  },
};

export const useAuthStore = create<IAuthStore>(
  persist<IAuthStore>("user", (set, get) => ({
    ...initialAuthState,
    login: async (params, { onSuccess, onFailed }) => {
      try {
        set((state) => ({ ...state, isLoading: true }));

        const { data } = await AuthAPI.login(params);

        set((state) => ({
          ...state,
          data: data.user,
          isLoading: false,
        }));

        onSuccess?.("Success Login");
      } catch (error) {
        set((state) => ({
          ...state,
          error: error as IErrors,
          isLoading: false,
        }));
        // onFailed?.(error);
      }
    },

    register: async (params, { onSuccess, onFailed }) => {
      try {
        set((state) => ({ ...state, isLoading: true }));

        const { data } = await AuthAPI.register(params);

        set((state) => ({
          ...state,
          data: data.user,
          isLoading: false,
        }));

        onSuccess?.("Registration Success");
      } catch (error) {
        set((state) => ({
          ...state,
          error: error as IErrors,
          isLoading: false,
        }));
        // onFailed?.(error);
      }
    },

    logout: () => {
      set((state) => ({
        ...state,
        data: {
          email: "",
          token: "",
          username: "",
          bio: null,
          image: null,
          createdAt: "",
          updatedAt: "",
          id: 0,
        },
      }));
    },

    isLogin: () => {
      const user = get().data;
      return user?.token ? true : false;
    },
  }))
);
