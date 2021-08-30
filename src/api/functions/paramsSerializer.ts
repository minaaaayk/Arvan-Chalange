import qs from "qs";
import { PaginationParams } from "../../@types";

export const paramsSerializer = (params: PaginationParams) =>
  qs.stringify(params, { arrayFormat: "repeat" });
