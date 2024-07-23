import { json } from 'react-router-dom';
import { ICompany } from '../../SharedModule/interfaces/company.interface';

export const bLoader = async () => {
  try {
    const company: ICompany = await new Promise((resolve) =>
      setTimeout(() => resolve({ companyId: 0, companyName: 'testCompanyName' }), 2000),
    );
    return json(company);
  } catch (error) {
    return error;
  }
};
