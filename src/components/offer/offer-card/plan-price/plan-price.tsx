import type React from 'react';

import classnames from 'classnames';

import { Typography } from '@mui/material';

import { useStyles } from './styles';

interface IPlanPriceProps {
  price: string;
  variant: 'offerCard' | 'comparisonTable';
}

export const PlanPrice: React.FC<IPlanPriceProps> = ({ price, variant }) => {
  const { classes } = useStyles();
  const [amount, period] = price.split(' ');

  return (
    <Typography className={classnames(classes.price, classes[variant])}>
      <span className="amount">{amount} </span>
      <span className="period">{period}</span>
    </Typography>
  );
};
