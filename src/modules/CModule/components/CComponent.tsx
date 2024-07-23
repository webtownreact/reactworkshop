import React, { Suspense } from 'react';
import { ICompany } from '../../SharedModule/interfaces/company.interface';
import { Await, useLoaderData } from 'react-router-dom';
import { ILoaderData } from '../../SharedModule/interfaces/loader-data.interace';

export const Component = () => {
  const loaderData: ILoaderData<ICompany> = useLoaderData() as ILoaderData<ICompany>;

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Await resolve={loaderData.data} errorElement={<p>Error</p>}>
        {(iCompany: ICompany) => (
          <>
            <p>{iCompany.companyId}</p>
            <p>{iCompany.companyName}</p>
          </>
        )}
      </Await>
    </Suspense>
  );
};
