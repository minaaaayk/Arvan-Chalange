import { ErrorMessage } from "../../constants";

export const getStatusMessage = (statusCode: number) => {
  switch (statusCode) {
    case 401:
      return ErrorMessage.CODE_401_UNAUTHORIZED;
    case 403:
      return ErrorMessage.CODE_403_UNAUTHORIZED;
    case 404:
      return ErrorMessage.CODE_404_NOT_FOUND;

    default:
      return statusCode > 500 ? ErrorMessage.CODE_500_RANGE : "";
  }
};
