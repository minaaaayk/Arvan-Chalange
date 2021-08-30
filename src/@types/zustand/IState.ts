import { IErrors } from ".";

export interface IState<T> {
  isLoading: boolean;
  error: IErrors | null;
  data: T;
}
