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
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.E}`,
    text: 'E component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.F}`,
    text: 'F component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.G}`,
    text: 'G component',
  },
  {
    to: `${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.H}`,
    text: 'H component',
  },
];
