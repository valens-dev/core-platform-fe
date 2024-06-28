import { ITextProps } from '../../types';
import { IFeature, IPlan } from '../types';

export interface IComparisonTableProps {
  text: ITextProps;
  features: IFeature[];
  plans: IPlan[];
}
