/* eslint-disable import/no-default-export */
import { Box, Grid, TextField, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

import { appText } from '@/constants/strings';

import { useStyles } from './styles';

const text = appText.userInfo;

export default function FormSection(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.infoSection}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className={classes.formSection}>
            <Typography variant="h6" className={classes.basicInformation}>
              {text.basicInformation}
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
            <Box className={classes.form}>
              <Typography className={classes.label}>
                {text.labelEmail}
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
            <Box className={classes.form}>
              <Typography className={classes.label}>
                {text.labelPhone}
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
            <Box className={classes.form}>
              <Typography className={classes.label}>
                {text.labelCompany}
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
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.imageSection}>
            <LazyImage
              src="/src/assets/image/list-panel.webp"
              alt="Clipboard"
              className={classes.image}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
