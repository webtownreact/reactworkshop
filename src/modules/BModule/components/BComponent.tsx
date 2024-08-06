import React, { useEffect } from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { ICompany } from '../../SharedModule/interfaces/company.interface';
import { useTranslation } from 'react-i18next';
import { DateTime, Info } from 'luxon';
import { backendUrl } from '../../../env';
import { HttpClient } from '../../CoreModule/axios/axios';

export const Component = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const company: ICompany = useLoaderData() as ICompany;
  const { t } = useTranslation();

  useEffect(() => {
    console.log(id);
    console.log(searchParams.getAll('asad'));
    console.log(searchParams.get('asd'));
  }, []);

  useEffect(() => {
    const callFakeBackend = async () => {
      try {
        const response = await fetch(`${backendUrl}/backend`);
        const response2 = await fetch('/backend');
        const response3 = await HttpClient.getRequest<ICompany>('/backend');
        console.log(response, response2, response3.data);
      } catch (error) {
        console.log(error);
      }
    };

    callFakeBackend();
  }, []);

  return (
    <>
      <div>{company.companyId}</div>
      <div>{company.companyName}</div>
      <div>{t('welcomeToReact', { test: 'test' })}</div>
      <div>
        {DateTime.now()
          .setLocale('ar')
          .setZone('America/New_York')
          .minus({ weeks: 1 })
          // .endOf('day')
          .toLocaleString(DateTime.DATETIME_FULL)}
      </div>
      {Info.eras('long', { locale: 'fr' }).map((a) => {
        return <div key={a}>{a}</div>;
      })}
    </>
  );
};
