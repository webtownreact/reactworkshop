import React, { useState } from 'react';
import { EContext } from '../contexts/e.context';
import { CompanyComponent } from './CompanyComponent';

export const Component = () => {
  const [company, setCompany] = useState({ companyId: 0, companyName: 'companyName' });

  return (
    <EContext.Provider value={{ company, setCompany }}>
      <CompanyComponent />
    </EContext.Provider>
  );
};
