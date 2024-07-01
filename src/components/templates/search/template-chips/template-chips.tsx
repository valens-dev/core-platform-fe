import { Box, Typography } from '@mui/material';

import { appText } from '@/constants/strings';
import { TEMPLATE_CHIPS } from '@/constants/templates';

import { getChipStyle } from '@/utils/template-chips';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function TemplateChips(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.chipsWrapper}>
      <Typography>{text.tryThis}</Typography>
      {TEMPLATE_CHIPS.map(({ label, background, color }, i) => {
        return (
          <Box
            /* eslint-disable-next-line react/no-array-index-key */
            key={i}
            className={classes.chip}
            style={getChipStyle(background, color)}
          >
            <Typography variant="body2" style={{ color }}>
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
