import React from 'react';

import classnames from 'classnames';

import CheckIcon from '@/assets/icon/check-icon.svg?react';

import useStyles from './styles';

interface FeatureListProps {
  features: string[];
  benefitText: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  benefitText,
}) => {
  const { classes } = useStyles();

  return (
    <ul className={classes.featureList}>
      {features.map((feature, index) => (
        <li
          key={index}
          className={classnames(
            classes.featureItem,
            feature.includes(benefitText)
              ? classes.titleFeature
              : classes.textFeature
          )}
        >
          {!feature.includes(benefitText) && (
            <CheckIcon className={classes.checkIcon} />
          )}
          {feature}
        </li>
      ))}
    </ul>
  );
};
