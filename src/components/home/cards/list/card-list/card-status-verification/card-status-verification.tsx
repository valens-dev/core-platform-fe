import React from 'react';

import { Box, Typography } from '@mui/material';

import { STATUS_ICONS } from '@/components/home/cards/constants';

import { useStyles } from './styles';

interface ICardStatusVerificationProps {
  status: string;
  verification: string;
}

export function CardStatusVerification({
  status,
  verification,
}: ICardStatusVerificationProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.cardStatus}>
        {/* eslint-disable-next-line import/no-named-as-default-member */}
        {React.createElement(STATUS_ICONS[status])}
        <Typography variant="body2" className={classes.cardStatusText}>
          {status}
        </Typography>
      </Box>
      <Box className={classes.cardVerification}>
        {/* eslint-disable-next-line import/no-named-as-default-member */}
        {React.createElement(STATUS_ICONS[verification])}
        <Typography variant="body2" className={classes.cardVerificationText}>
          {verification}
        </Typography>
      </Box>
    </>
  );
}
