import React, { useState, useEffect, ReactElement } from 'react';
import { ISlotProps } from '../interfaces/slot.interface';
import { IGeneric } from '../interfaces/generic.interface';

export const GenericComponent = <T,>({ state, setState, promise, children }: IGeneric<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(state);

  useEffect(() => {
    const getData = async () => {
      try {
        const result: T = await promise;
        setState(result);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getData();
  }, [promise, setState]);

  const getSlot = (slotName: 'loading' | 'error' | 'content') => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && (child as ReactElement<ISlotProps>).props.slot === slotName) {
        return child;
      }
      return null;
    });
  };

  if (isLoading) {
    return <>{getSlot('loading')}</>;
  }

  if (isError) {
    return <>{getSlot('error')}</>;
  }

  return <>{getSlot('content')}</>;
};
