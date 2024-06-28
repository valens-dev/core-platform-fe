import React from 'react';

import { Box, Typography } from '@mui/material';
import classnames from 'classnames';

import { Table } from './table';
import { PlanPrice } from '@/components/offer/offer-card/plan-price';

import useStyles from './styles';
import { IComparisonTableProps } from './types';

export const ComparisonTable: React.FC<IComparisonTableProps> = ({
  text,
  plans,
  features,
}) => {
  const { classes } = useStyles();

  const getPlanPriceClass = (planTitle: string) =>
    classnames({
      [classes.starterPrice]: planTitle === 'Starter',
      [classes.premiumPrice]: planTitle === 'Premium',
      [classes.enterprisePrice]: planTitle === 'Enterprise',
    });

  return (
    <Box className={classes.featureComparisonWrapper}>
      <Box className={classes.headerRow}>
        <Typography variant="h2" className={classes.featureComparisonTitle}>
          {text.compareFeaturesTitle}
        </Typography>
        {plans.map((plan, index) => (
          <Box key={index} className={classes.tableHeaderPlan}>
            <Typography className={classes.planTitle}>{plan.title}</Typography>
            <Typography className={getPlanPriceClass(plan.title)}>
              <PlanPrice price={plan.price} variant="comparisonTable" />
            </Typography>
          </Box>
        ))}
      </Box>
      <Table text={text} features={features} plans={plans} />
    </Box>
  );
};