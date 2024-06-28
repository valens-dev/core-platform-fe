import { Box, Typography } from '@mui/material';

import { appText } from '@/constants/strings';
import { TEMPLATE_CHIPS } from '@/constants/templates';

import { getChipStyle } from './utils';

import useStyles from './styles';

const text = appText.homePage.search;

export const TemplateChips = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.chipsWrapper}>
      <Typography>{text.tryThis}</Typography>
      {TEMPLATE_CHIPS.map(({ label, background, color }, i) => (
        <Box
          key={i}
          className={classes.chip}
          style={getChipStyle(background, color)}
        >
          <Typography variant="body2" style={{ color }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
