import { AutoActionType } from '../enums/auto.action-type';
import { IAutoAction } from '../interfaces/auto-action.interface';
import { IAuto } from '../interfaces/auto.interface';

export const autoReducer: (state: IAuto, action: IAutoAction) => IAuto = (state: IAuto, action: IAutoAction): IAuto => {
  switch (action.type) {
    case AutoActionType.set_color: {
      return {
        ...state,
        color: action.payload.color!,
      };
    }
    case AutoActionType.set_number_of_seats: {
      return {
        ...state,
        numberOfSeats: action.payload.numberOfSeats!,
      };
    }
    default: {
      return state;
    }
  }
};
