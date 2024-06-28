import { type ITextProps } from '../../types';

import { type IPlan, type IFeature } from '../types';

export interface IComparisonTableProps {
  text: ITextProps;
  features: IFeature[];
  plans: IPlan[];
}
