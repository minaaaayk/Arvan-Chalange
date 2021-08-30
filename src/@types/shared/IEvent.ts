export interface IEvent {
  onSuccess?: (message: string) => void;
  onFailed?: (message: string) => void;
}
