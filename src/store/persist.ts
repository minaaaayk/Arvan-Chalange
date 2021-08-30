import { GetState, SetState, StateCreator, StoreApi } from "zustand";
import { IState } from "../@types";

const isRunningInBrowser = () => typeof window !== "undefined";

/**
 *
 *
 * from : https://github.com/pmndrs/zustand/issues/76#issuecomment-670367631
 *
 * improve for storing data
 * @template T
 * @param {string} name
 * @param {StateCreator<T>} config
 *
 *
 * TODO: use from : https://github.com/pmndrs/zustand#persist-middleware
 */
export const persist = <T extends IState<any>>(
  name: string,
  config: StateCreator<T>
) => (set: SetState<T>, get: GetState<T>, api: StoreApi<T>): T => {
  const state = config(
    (payload) => {
      set(payload);
      if (isRunningInBrowser()) {
        localStorage.setItem(name, JSON.stringify(get().data));
      }
    },
    get,
    api
  );
  const storedData = localStorage.getItem(name);
  return {
    ...state,
    ...(isRunningInBrowser() && {
      data: storedData ? JSON.parse(storedData) : null,
    }),
  };
};
