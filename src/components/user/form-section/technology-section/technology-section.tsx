/* eslint-disable import/no-default-export */
import { Box, Grid, TextField, Typography } from '@mui/material';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.userInfo;

export default function TechnologySection(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.infoSection}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.technologyType}>
            {text.technologyType}
          </Typography>
          <Box className={classes.form}>
            <Typography className={classes.label}>
              {text.labelUsername}
            </Typography>
            <TextField
              placeholder="example"
              variant="outlined"
              fullWidth
              margin="normal"
              className={classes.inputField}
              InputProps={{ classes: { input: classes.input } }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.imageSection}>
            <img
              src="/src/assets/image/server-block.png"
              alt="Server"
              className={classes.imageBlock}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
