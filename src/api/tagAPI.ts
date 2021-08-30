import { ITags } from "../@types";
import axios from "./axios";

export const TagAPI = {
  getTags: () => axios.get<ITags>(`/tags`),
};
