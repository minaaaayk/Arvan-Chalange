import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IErrors } from "../../@types";
import { ErrorMessage, Path } from "../../constants";
import { getStatusMessage } from "./getStatusMessage";

export const onResponseFailed = (error: AxiosError) => {
  if (error?.response?.data) {
    const {
      response,
      response: { data },
    } = error;

    if (data?.location) {
      window.location = error.response.data.location;
    } else if (response?.status > 300) {
      const toastId = "ERROR";
      if (response.status === 401) {
        localStorage.clear();
        window.location.pathname = Path.login;
      }
      const errMessage = getStatusMessage(response.status);
      errMessage && toast.error(errMessage, { toastId });
    }
    if (response?.status === 422 && data?.errors) {
      const errors: IErrors = data?.errors;
      Object.keys(errors).forEach((key) =>
        errors[key].forEach((message) => toast.error(key + " : " + message))
      );
      console.error("error on services: \n", response);
    }
  } else {
    toast.error(ErrorMessage.CONNECTION_ERROR);
  }

  return Promise.reject(error);
};
