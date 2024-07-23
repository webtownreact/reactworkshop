import { CompanyActionType } from '../enums/company-action-type.enum';
import { ICompanyActionPayload } from './company-action-payload.interface';

export interface ICompanyAction {
  type: CompanyActionType;
  payload: ICompanyActionPayload;
}
