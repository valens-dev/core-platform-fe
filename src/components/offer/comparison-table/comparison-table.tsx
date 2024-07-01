import classnames from 'classnames';

import { Box, Typography } from '@mui/material';

import { PlanPrice } from '@/components/offer/offer-card/plan-price';

import { Table } from './table';

import { type IComparisonTableProps } from './types';

import { useStyles } from './styles';

export function ComparisonTable({
  text,
  plans,
  features,
}: IComparisonTableProps): React.ReactNode {
  const { classes } = useStyles();

  function getPlanPriceClass(planTitle: string): string {
    return classnames({
      [classes.starterPrice]: planTitle === 'Starter',
      [classes.premiumPrice]: planTitle === 'Premium',
      [classes.enterprisePrice]: planTitle === 'Enterprise',
    });
  }

  return (
    <Box className={classes.featureComparisonWrapper}>
      <Box className={classes.headerRow}>
        <Typography variant="h2" className={classes.featureComparisonTitle}>
          {text.compareFeaturesTitle}
        </Typography>
        {plans.map((plan, index) => {
          return (
            /* eslint-disable-next-line react/no-array-index-key */
            <Box key={index} className={classes.tableHeaderPlan}>
              <Typography className={classes.planTitle}>
                {plan.title}
              </Typography>
              <Typography className={getPlanPriceClass(plan.title)}>
                <PlanPrice price={plan.price} variant="comparisonTable" />
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Table text={text} features={features} plans={plans} />
    </Box>
  );
}
