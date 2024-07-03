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
}: ICardStatusVerificationProps): React.ReactNode {
  const { classes } = useStyles();

  const StatusIcon = STATUS_ICONS[status];
  const VerificationIcon = STATUS_ICONS[verification];

  return (
    <>
      <Box className={classes.cardStatus}>
        <StatusIcon />
        <Typography variant="body2" className={classes.cardStatusText}>
          {status}
        </Typography>
      </Box>
      <Box className={classes.cardVerification}>
        <VerificationIcon />
        <Typography variant="body2" className={classes.cardVerificationText}>
          {verification}
        </Typography>
      </Box>
    </>
  );
}
