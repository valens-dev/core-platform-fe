import { Box, Typography } from '@mui/material';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.homePage.changeView;

export function HeaderCell(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerRow}>
      <Typography variant="body2" className={classes.headerCellName}>
        {text.headerName}
      </Typography>
      <Typography variant="body2" className={classes.headerCellCreated}>
        {text.headerCreated}
      </Typography>
      <Typography variant="body2" className={classes.headerCellStatus}>
        {text.headerStatus}
      </Typography>
      <Typography variant="body2" className={classes.headerCellVerification}>
        {text.headerVerification}
      </Typography>
    </Box>
  );
}
