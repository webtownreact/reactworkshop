import { Dispatch, createContext, useContext } from 'react';
import { IAuto } from '../interfaces/auto.interface';
import { IAutoAction } from '../interfaces/auto-action.interface';

export const AutoContext = createContext<IAuto>({
  color: 'green',
  numberOfSeats: 4,
});

export const AutoDispatchContext = createContext<Dispatch<IAutoAction>>(() => {});

export const useAuto = () => useContext(AutoContext);

export const useAutoDispatch = () => useContext(AutoDispatchContext);
