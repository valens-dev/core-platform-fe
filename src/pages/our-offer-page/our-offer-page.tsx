import { useState } from 'react';

import classnames from 'classnames';

import { Box, Button, Typography } from '@mui/material';

import { OfferCard } from '@/components/offer/offer-card';
import { ComparisonTable } from '@/components/offer/comparison-table';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.pricingPage.ourOffer;

export function OurOfferPage(): React.ReactNode {
  const { classes } = useStyles();
  const [isMonthly, setIsMonthly] = useState(true);

  const planTypeText = isMonthly ? appText.monthlyPlans : appText.annuallyPlans;

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titlePosition}>
        <Typography className={classes.title} variant="h2">
          {text.title}
        </Typography>
      </Box>
      <Box className={classes.toggleButtonsContainer}>
        <Button
          className={classnames(classes.toggleButton, {
            active: isMonthly,
          })}
          onClick={() => {
            setIsMonthly(true);
          }}
        >
          {text.monthly}
        </Button>
        <Button
          className={classnames(classes.toggleButton, {
            active: !isMonthly,
          })}
          onClick={() => {
            setIsMonthly(false);
          }}
        >
          {text.annually}
        </Button>
      </Box>
      <Box className={classes.plans}>
        {planTypeText.map((plan, index) => {
          return (
            /* eslint-disable-next-line react/no-array-index-key */
            <OfferCard key={index} plan={plan} text={text} />
          );
        })}
      </Box>
      <ComparisonTable
        text={text}
        features={appText.featureComparison}
        plans={planTypeText}
      />
    </Box>
  );
}
