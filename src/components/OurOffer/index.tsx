import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import classnames from 'classnames';
import {
  appText,
  monthlyPlans,
  annuallyPlans,
  featureComparison,
} from '@utils/strings';
import OfferCard from './OfferCard';
import ComparisonTable from './ComparisonTable';
import useStyles from './styles';

const OurOffer: React.FC = () => {
  const { classes } = useStyles();
  const text = appText.pricingPage.ourOffer;
  const [isMonthly, setIsMonthly] = useState(true);

  const planType = isMonthly ? monthlyPlans : annuallyPlans;

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
        {planType.map((plan, index) => (
          <OfferCard key={index} plan={plan} text={text} />
        ))}
      </Box>
      <ComparisonTable
        text={text}
        features={featureComparison}
        plans={planType}
      />
    </Box>
  );
};

export default OurOffer;
