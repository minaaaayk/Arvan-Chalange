import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const onResponseSuccess = (res: AxiosResponse<any>) => {
  res?.data?.message && toast.success(res?.data?.message);
  return res;
};
