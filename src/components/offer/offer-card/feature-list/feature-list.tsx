import classnames from 'classnames';

import CheckIcon from '@/assets/icon/check-icon.svg?react';

import { useStyles } from './styles';

interface IFeatureListProps {
  features: string[];
  benefitText: string;
}

export function FeatureList({
  features,
  benefitText,
}: IFeatureListProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <ul className={classes.featureList}>
      {features.map((feature, index) => {
        return (
          <li
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            className={classnames(
              classes.featureItem,
              feature.includes(benefitText)
                ? classes.titleFeature
                : classes.textFeature,
            )}
          >
            {!feature.includes(benefitText) && (
              <CheckIcon className={classes.checkIcon} />
            )}
            {feature}
          </li>
        );
      })}
    </ul>
  );
}
