import { createContext } from 'react';
import { ICompany } from '../../SharedModule/interfaces/company.interface';

export interface EContextType {
  company: ICompany;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCompany: any;
}

export const EContext = createContext<EContextType>({
  company: { companyId: 123, companyName: 'companyName' },
  setCompany: () => {},
});
