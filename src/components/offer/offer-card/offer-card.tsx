import classnames from 'classnames';

import { Box, Button, Typography } from '@mui/material';

import StarIcon from '@/assets/icon/star-icon.svg?react';

import { PlanPrice } from './plan-price';
import { FeatureList } from './feature-list';

import { type IOfferCardProps } from './types';

import { useStyles } from './styles';

export function OfferCard({ plan, text }: IOfferCardProps): React.ReactNode {
  const { classes } = useStyles();

  const offerCardClass = classnames(classes.plan, {
    [classes.starter]: plan.title === 'Starter',
    [classes.premium]: plan.title === 'Premium',
    [classes.enterprise]: plan.title === 'Enterprise',
  });

  return (
    <Box className={offerCardClass}>
      {plan.popular ? (
        <Box className={classes.mostPopular}>
          <StarIcon className={classes.starIcon} />
          {text.mostPopular}
        </Box>
      ) : undefined}
      <Typography variant="h3" className={classes.planTitle}>
        {plan.title}
      </Typography>
      <Typography variant="h4" className={classes.description}>
        {plan.description}
      </Typography>
      <PlanPrice price={plan.price} variant="offerCard" />
      <FeatureList features={plan.features} benefitText={text.benefitText} />
      <Box className={classes.btnPosition}>
        <Button className={classes.ctaButton}>{plan.buttonText}</Button>
      </Box>
    </Box>
  );
}
