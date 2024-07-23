import React, { useContext } from 'react';
import { EContext } from '../contexts/e.context';

export const CompanyComponent = () => {
  const companyContext = useContext(EContext);

  return (
    <>
      <div>{companyContext?.company.companyId}</div>
      <div>{companyContext?.company.companyName}</div>
      {/* <div onClick={() => props.setCompany({ companyName: 'companyNameTest', companyId: 123 })}>setcompany</div> */}
      <div onClick={() => companyContext.setCompany({ companyName: 'companyNameTest', companyId: 1232 })}>
        setcompany
      </div>
    </>
  );
};
