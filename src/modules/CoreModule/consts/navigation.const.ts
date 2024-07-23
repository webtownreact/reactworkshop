import { RouterPath } from '../../SharedModule/enums/RouterPath.enum';
import { INavigationConfig } from '../interfaces/navigation-config.interface';

export const navigationConfig: INavigationConfig[] = [
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.A}`,
    text: 'A component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.B}`,
    text: 'B component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.C}`,
    text: 'C component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.D}`,
    text: 'D component',
  },
];
