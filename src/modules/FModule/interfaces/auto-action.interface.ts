import { AutoActionType } from '../enums/auto.action-type';
import { IAutoActionPayload } from './auto-action-payload.interface';

export interface IAutoAction {
  type: AutoActionType;
  payload: IAutoActionPayload;
}
