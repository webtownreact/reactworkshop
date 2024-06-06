import React, { Suspense } from 'react';
import { IAsd } from '../interfaces/asd.interface';
import { Await, useLoaderData } from 'react-router-dom';
import { ILoaderData } from '../../shared/interfaces/loader-data.interface';

export const Component = () => {
  const loaderData: ILoaderData<IAsd> = useLoaderData() as ILoaderData<IAsd>;

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Await resolve={loaderData.data} errorElement={<p>Error</p>}>
        {(iAsd: IAsd) => <p>{iAsd.asd}</p>}
      </Await>
    </Suspense>
  );
};
