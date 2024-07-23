import React from 'react';
import { ICompany } from '../../SharedModule/interfaces/company.interface';

export interface ICompanyComponent {
  company: ICompany | undefined;
  setCompany: React.Dispatch<React.SetStateAction<ICompany | undefined>>;
}

export const CompanyComponent = (props: ICompanyComponent) => {
  return (
    <>
      <div>{props.company?.companyId}</div>
      <div>{props.company?.companyName}</div>
      <div onClick={() => props.setCompany({ companyName: 'companyNameTest', companyId: 123 })}>setcompany</div>
    </>
  );
};
