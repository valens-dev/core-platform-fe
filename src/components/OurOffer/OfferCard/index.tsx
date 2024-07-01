import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import classnames from 'classnames';

import { IPlanProps, ITextProps } from '../interfaces';
import PlanPrice from './PlanPrice';
import FeatureList from './FeatureList';

import StarIcon from '@assets/icons/star-icon.svg?react';

import useStyles from './styles';

interface IOfferCardProps {
  plan: IPlanProps;
  text: ITextProps;
}

const OfferCard: React.FC<IOfferCardProps> = ({ plan, text }) => {
  const { classes } = useStyles();

  const offerCardClass = classnames(classes.plan, {
    [classes.starter]: plan.title === 'Starter',
    [classes.premium]: plan.title === 'Premium',
    [classes.enterprise]: plan.title === 'Enterprise',
  });

  return (
    <Box className={offerCardClass}>
      {plan.popular && (
        <Box className={classes.mostPopular}>
          <StarIcon className={classes.starIcon} />
          {text.mostPopular}
        </Box>
      )}
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
};

export default OfferCard;