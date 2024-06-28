import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import classnames from 'classnames';
import { appText } from '@/constants/strings';
import { OfferCard } from '@/components/offer/offer-card';
import { ComparisonTable } from '@/components/offer/comparison-table';
import useStyles from './styles';

const text = appText.pricingPage.ourOffer;

export const OurOfferPage: React.FC = () => {
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
          onClick={() => setIsMonthly(true)}
        >
          {text.monthly}
        </Button>
        <Button
          className={classnames(classes.toggleButton, {
            active: !isMonthly,
          })}
          onClick={() => setIsMonthly(false)}
        >
          {text.annually}
        </Button>
      </Box>
      <Box className={classes.plans}>
        {planTypeText.map((plan, index) => (
          <OfferCard key={index} plan={plan} text={text} />
        ))}
      </Box>
      <ComparisonTable
        text={text}
        features={appText.featureComparison}
        plans={planTypeText}
      />
    </Box>
  );
};