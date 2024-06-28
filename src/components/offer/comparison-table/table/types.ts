import { ITextProps } from '../../types';

import { IPlan, IFeature } from '../types';

export interface IComparisonTableProps {
  text: ITextProps;
  features: IFeature[];
  plans: IPlan[];
}
