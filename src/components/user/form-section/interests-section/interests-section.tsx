import AddIcon from '@mui/icons-material/Add';

import { Box, Grid, Typography, IconButton } from '@mui/material';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.userInfo;

export function InterestsSection(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box className={classes.sectionInterest}>
          <Typography variant="h6">{text.interests}</Typography>
          <IconButton className={classes.addButton}>
            <AddIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
