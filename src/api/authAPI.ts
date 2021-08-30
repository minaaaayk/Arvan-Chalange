import { IUser, LoginParams, RegisterParams } from "../@types";
import axios from "./axios";

export const AuthAPI = {
  login: (params: LoginParams) =>
    axios.post<{ user: IUser }>(`/users/login`, { user: params }),
  register: (params: RegisterParams) =>
    axios.post<{ user: IUser }>(`/users`, { user: params }),
};
