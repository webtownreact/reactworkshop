import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RouterPath } from '../../SharedModule/enums/RouterPath.enum';
import { ICompany } from '../../SharedModule/interfaces/company.interface';
import { CompanyComponent } from './CompanyComponent';
import { Select } from './select';
import { useTranslation } from 'react-i18next';

export const Component = () => {
  const navigate = useNavigate();
  // const [company, setCompany] = useState<ICompany>({ companyId: 1234, companyName: 'defaultCompanyName' });
  const [company, setCompany] = useState<ICompany>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('i only run once');
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const iCompany: ICompany = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                companyId: 0,
                companyName: 'testCompany',
              }),
            2000,
          ),
        );

        setCompany(iCompany);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    getData();

    return () => {};
  }, []);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) {
    return <div>error ...</div>;
  }

  return (
    <>
      <div>A</div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          i18n.changeLanguage('fr');
        }}
      >
        change lang
      </button>
      <div>{t('welcomeToReact')}</div>
      <div>
        <NavLink to={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.B}`}>
          <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <span>Navigate to B</span>
          </div>
        </NavLink>
      </div>
      <div>{company?.companyId}</div>
      <div>{company?.companyName}</div>
      <CompanyComponent company={company} setCompany={setCompany} />
      <Select
        label={'test select'}
        options={[
          { label: 'label1', value: 'label1' },
          { label: 'label2', value: 'label2' },
        ]}
      ></Select>
      <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1> <h1>asdasdasddsdsadsads</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => navigate(`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.B}`)}
      >
        Navigate to B
      </button>
    </>
  );
};
