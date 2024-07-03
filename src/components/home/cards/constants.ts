import { type SVGProps, type FunctionComponent } from 'react';

import Workspace from '@/assets/image/workspace.png';
import Template5 from '@/assets/image/template-5.png';
import Template6 from '@/assets/image/template-6.png';
import RedDot from '@/assets/icon/reddot-icon.svg?react';
import GrayDot from '@/assets/icon/graydot-icon.svg?react';
import GreenDot from '@/assets/icon/greendot-icon.svg?react';
import PurpleDot from '@/assets/icon/purpledot-icon.svg?react';
import OrangeDot from '@/assets/icon/orangedot-icon.svg?react';

export const CARDS_DATA = [
  {
    imgSrc: Template5,
    altText: 'Clouds Gambit basics',
    title: 'Clouds Gambit basics',
    creation: 'Created: 5 days ago',
  },
  {
    imgSrc: Template6,
    altText: 'Clouds Gambit basics',
    title: 'Clouds Gambit basics',
    creation: 'Created: 5 days ago',
  },
];

export const STATUS_ICONS: Record<
  string,
  FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
> = {
  Complete: PurpleDot,
  Draft: GrayDot,
  Success: GreenDot,
  Failed: RedDot,
  Warning: OrangeDot,
};

export const CARDS_DATA2 = [
  {
    imgSrc: Workspace,
    altText: 'Workspace 1',
    title: 'Workspace 1',
    creation: '5 days ago',
    status: 'Complete',
    verification: 'Success',
  },
  {
    imgSrc: Workspace,
    altText: 'Workspace 1',
    title: 'Workspace 1',
    creation: '5 days ago',
    status: 'Draft',
    verification: 'Draft',
  },
  {
    imgSrc: Workspace,
    altText: 'Workspace 1',
    title: 'Workspace 1',
    creation: '5 days ago',
    status: 'Warning',
    verification: 'Failed',
  },
];
