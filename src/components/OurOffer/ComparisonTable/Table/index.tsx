import { Box, Typography } from '@mui/material';
import { IFeature, IPlan, ITextProps } from '../../interfaces';
import classnames from 'classnames';
import CheckIcon from '@assets/icon/check-in-icon.svg?react';
import CrossIcon from '@assets/icon/x-icon.svg?react';
import useStyles from './styles';

interface IComparisonTableProps {
  text: ITextProps;
  features: IFeature[];
  plans: IPlan[];
}

function Table({ features, plans }: IComparisonTableProps) {
  const { classes } = useStyles();

  function handleFeatureName(feature: IFeature) {
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

  function handlePlanTable(feature: IFeature, planTitle: string) {
    const value = feature[planTitle.toLowerCase()];
    if (typeof value === 'string' && value !== '') {
      return <Typography>{value}</Typography>;
    } else if (value) {
      return <CheckIcon />;
    } else if (value === '') {
      return null;
    } else {
      return <CrossIcon />;
    }
  }

  return (
    <Box className={classes.featureComparisonTable}>
      {features.map((feature, index) => (
        <Box key={index} className={classes.tableRow}>
          {handleFeatureName(feature)}
          {plans.map((plan, planIndex) => (
            <Box key={planIndex} className={classes.tableCell}>
              {handlePlanTable(feature, plan.title)}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Table;
