import { ReactNode } from 'react';

export interface IGeneric<T> {
  state: T;
  setState: (state: T) => void;
  promise: Promise<T>;
  children: ReactNode;
}
