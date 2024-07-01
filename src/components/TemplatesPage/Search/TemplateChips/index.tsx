import { Box, Typography } from '@mui/material';

import { templateChips } from '@components/HomePage/constants';

import { appText } from '@utils/strings';
import useStyles, { getChipStyle } from './styles';

const TemplateChips = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.chipsWrapper}>
      <Typography>{appText.homepage.search.tryThis}</Typography>
      {templateChips.map(({ label, background, color }, i) => (
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

export default TemplateChips;
