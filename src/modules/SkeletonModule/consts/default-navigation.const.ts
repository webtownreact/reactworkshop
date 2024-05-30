import { RouterPath } from '../../core/enums/router-path.enum';
import { INavigation } from '../interface/navigation.interface';

export const defaultNavigation: Array<INavigation> = [
  {
    id: 0,
    displayName: 'AComponent',
    path: `${RouterPath.a}`,
  },
  { id: 1, displayName: 'BComponent', path: `${RouterPath.b}` },
  { id: 2, displayName: 'CComponent', path: `${RouterPath.c}` },
];
