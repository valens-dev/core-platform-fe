import AIDrivenForecastIcon from '@assets/icon/ai-driven-forecast.svg?react';
import ConnectAndStreamlineIcon from '@assets/icon/connect-streamline.svg?react';
import InstantInsightsIcon from '@assets/icon/instant-insights.svg?react';
import YourDataYourWayIcon from '@assets/icon/your-data-your-way.svg?react';

export const getCardsData = () => [
  {
    title: 'AI-Driven Forecasts',
    description:
      'Harness the unmatched power of artificial intelligence with Nimbus. Dive deep into predictive analytics, anticipate market trends, and stay steps ahead of your competition. Make informed decisions backed by data-driven insights',
    Icon: AIDrivenForecastIcon,
  },
  {
    title: 'Connect & Streamline',
    description:
      'Nimbus seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the gaps in your data ecosystem, ensuring you have a holistic view of your operations',
    Icon: ConnectAndStreamlineIcon,
  },
  {
    title: 'Instant Insights',
    description:
      'In the fast-paced world of business, every second counts. Nimbus processes data in real-time, ensuring you are always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly.',
    Icon: InstantInsightsIcon,
  },
  {
    title: 'Your Data, Your Way',
    description: `Visualize data the way you want. With Nimbus's intuitive dashboard builder, you can create tailored views that highlight the metrics that matter most to you. From drag-and-drop functionalities to color-coded data points, customization is at your fingertips.`,
    Icon: YourDataYourWayIcon,
  },
];
