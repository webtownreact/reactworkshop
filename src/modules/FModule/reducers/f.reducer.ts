import { ICompany } from '../../SharedModule/interfaces/company.interface';
import { CompanyActionType } from '../enums/company-action-type.enum';
import { ICompanyAction } from '../interfaces/comapany-action.interface';

export function reducer(state: ICompany, action: ICompanyAction) {
  switch (action.type) {
    case CompanyActionType.UPDATE_ID: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.companyId = action.payload.company.companyId;
      return newState;
    }
    case CompanyActionType.UPDATE_NAME: {
      return {
        ...state,
        companyName: action.payload.company.companyName,
      };
    }
    default: {
      return state;
    }
  }
}
