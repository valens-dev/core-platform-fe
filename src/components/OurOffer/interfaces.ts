export interface IPlan {
  title: string;
  price: string;
}

export interface IFeature {
  name: string;
  [key: string]: string | boolean;
}

export interface IPlanProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface ITextProps {
  compareFeaturesTitle: string;
  title: string;
  mostPopular: string;
  benefitText: string;
}
