import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Line } from '@/shared/line';
import { Chip } from '@/shared/chip';
import { Button } from '@/shared/button';
import { LazyImage } from '@/shared/lazy-image';

import { ColorVariant } from '@/types/style';

import { appText } from '@/constants/strings';

import ExampleImage from '@/assets/image/example.webp';

import { useStyles } from './styles';

const text = appText.landingPage.infoPanel;

export function InfoPanel(): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();

  function handleOpenOffers(): void {
    navigate('/our-offer');
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftSideContent}>
        <Chip label={text.chipLabel} className={classes.chip} />
        <Typography variant="h4" className={classes.greatSupportText}>
          {text.greatSupport}
        </Typography>
        <Typography variant="h4" className={classes.makeTheRightMoveText}>
          {text.makeTheRightMove}
        </Typography>
        <Line className={classes.line} />
        <Typography variant="body1" className={classes.note}>
          {text.note}
        </Typography>
        <Box className={classes.buttons}>
          <Button>
            <Typography variant="body2">{text.startFreeTrial}</Typography>
          </Button>
          <Button colorVariant={ColorVariant.Light} onClick={handleOpenOffers}>
            <Typography variant="body2">{text.ourOffers}</Typography>
          </Button>
        </Box>
      </Box>
      <LazyImage src={ExampleImage} alt="Example" className={classes.image} />
    </Box>
  );
}
