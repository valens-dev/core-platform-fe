import { ITextProps } from '../types';

interface IPlanProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface IOfferCardProps {
  plan: IPlanProps;
  text: ITextProps;
}
