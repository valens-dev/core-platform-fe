import Marquee from 'react-fast-marquee';

import { Box } from '@mui/material';

import { ICONS } from './constants';

import { useStyles } from './styles';

export function Track(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.marqueeBox}>
        <Marquee gradient className={classes.marqueeContent} speed={300}>
          {ICONS.map((Icon, i) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <Icon key={i} className={classes.marqueeItem} />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
}
