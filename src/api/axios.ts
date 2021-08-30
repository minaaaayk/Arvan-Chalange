import axios from "axios";
import { onResponseFailed } from "./functions/onResponseFailed";
import { onResponseSuccess } from "./functions/onResponseSuccess";

export const BASE_URL = "https://conduit.productionready.io/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accepts: "application/json",
    "Referrer-Policy": "no-referrer",
  },
});

instance.interceptors.request.use(function (config) {
  const user = localStorage.getItem("user");
  const token = (user && JSON.parse(user)?.token) || "";

  if (token !== "") config.headers.Authorization = `Token ${token}`;

  return config;
});

instance.interceptors.response.use(onResponseSuccess, onResponseFailed);

export default instance;
