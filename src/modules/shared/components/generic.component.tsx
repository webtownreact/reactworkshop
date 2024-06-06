import React, { useEffect, useState } from 'react';
import { ISdf } from '../../AModule/interfaces/sdf.interface';
import { IGeneric } from '../interfaces/generic.inteface';

export const GenericComponent = ({ state, setState, promise }: IGeneric<any>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const _sdf: ISdf = await promise;
        setState(_sdf);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getData();

    return () => {};
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{state}</div>;
};
