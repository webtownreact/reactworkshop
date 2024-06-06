export interface IGeneric<T> {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  promise: Promise<T>;
}
