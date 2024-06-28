import { ITextProps } from '../types';

export interface IPlan {
  title: string;
  price: string;
}

export interface IFeature {
  name: string;
  [key: string]: string | boolean;
}

export interface IComparisonTableProps {
  text: ITextProps;
  features: IFeature[];
  plans: IPlan[];
}
