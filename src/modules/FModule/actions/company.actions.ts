import { CompanyActionType } from '../enums/company-action-type.enum';
import { ICompanyAction } from '../interfaces/comapany-action.interface';

export const createCompanyUpdateIdAction: (companyId: number) => ICompanyAction = (companyId: number) => {
  return { type: CompanyActionType.UPDATE_ID, payload: { company: { companyId } } };
};

export const createCompanyUpdateNameAction: (companyName: string) => ICompanyAction = (companyName: string) => {
  return { type: CompanyActionType.UPDATE_NAME, payload: { company: { companyName } } };
};
