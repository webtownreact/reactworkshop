import React, { useEffect } from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { ICompany } from '../../SharedModule/interfaces/company.interface';

export const Component = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const company: ICompany = useLoaderData() as ICompany;

  useEffect(() => {
    console.log(id);
    console.log(searchParams.getAll('asd'));
    console.log(searchParams.get('asd'));
  }, []);

  return (
    <>
      <div>{company.companyId}</div>
      <div>{company.companyName}</div>
    </>
  );
};
