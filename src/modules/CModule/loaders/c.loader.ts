import { defer } from 'react-router-dom';

export const cLoader = () => {
  return defer({
    data: new Promise((resolve) => setTimeout(() => resolve({ companyId: 0, companyName: 'testCompanyName' }), 2000)),
  });
};
