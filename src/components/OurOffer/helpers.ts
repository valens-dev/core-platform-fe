export interface Plan {
  title: string;
  price: string;
}

export interface Feature {
  name: string;
  [key: string]: string | boolean;
}

export interface PlanProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface TextProps {
  compareFeaturesTitle: string;
  title: string;
  mostPopular: string;
  benefitText: string;
}