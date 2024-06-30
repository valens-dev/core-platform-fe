import classnames from 'classnames';

import { Box, Typography } from '@mui/material';

import CrossIcon from '@/assets/icon/x-icon.svg?react';
import CheckIcon from '@/assets/icon/check-in-icon.svg?react';

import { type IFeature } from '../types';

import { type IComparisonTableProps } from './types';

import { useStyles } from './styles';

export function Table({
  features,
  plans,
}: IComparisonTableProps): React.ReactNode {
  const { classes } = useStyles();

  /** TODO: refactor into a component */
  function handleFeatureName(feature: IFeature): React.ReactNode {
    return (
      <Typography
        className={classnames(classes.tableFeature, {
          [classes.emptyFeatureCell]: feature.starter === '',
          [classes.nonEmptyFeatureCell]: feature.starter !== '',
        })}
      >
        {feature.name}
      </Typography>
    );
  }

  /** TODO: refactor into a component */
  function handlePlanTable(
    feature: IFeature,
    planTitle: string,
  ): React.ReactNode | undefined {
    const value = feature[planTitle.toLowerCase()];
    if (typeof value === 'string' && value !== '') {
      return <Typography>{value}</Typography>;
    } else if (value) {
      return <CheckIcon />;
    } else if (value === '') {
      return undefined;
    }
    return <CrossIcon />;
  }

  return (
    <Box className={classes.featureComparisonTable}>
      {features.map((feature, index) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Box key={index} className={classes.tableRow}>
          {handleFeatureName(feature)}
          {plans.map((plan, planIndex) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <Box key={planIndex} className={classes.tableCell}>
              {handlePlanTable(feature, plan.title)}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
