/* eslint-disable import/no-default-export */

import { Box, Grid, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.userInfo;

export default function MemberSection(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.noBorderSection}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className={classes.section}>
            <Typography variant="h6">{text.membership}</Typography>
            <Typography className={classes.note}>
              {text.typeMembership}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.section}>
            <Box className={classes.trial}>
              <Typography variant="h6" className={classes.paymentTrial}>
                {text.paymentTrial}
              </Typography>
              <LazyImage
                src="/src/assets/image/progress-bar.webp"
                alt="Progress Bar"
                className={classes.progressImage}
              />
              <Typography className={classes.daysLeft}>
                {text.daysLeft}
              </Typography>
            </Box>
            <Typography className={classes.note}>
              {text.subscription}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
