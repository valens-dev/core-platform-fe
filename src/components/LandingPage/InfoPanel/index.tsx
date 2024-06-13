import { Box, Typography } from '@mui/material';

import { appText } from '@utils/strings';

import Line from '@shared/Line';
import Chip from '@shared/Chip';
import Button from '@shared/Button';
import { useNavigate } from 'react-router-dom';

import { ColorVariant } from '@models/styles';

import ExampleImage from '@assets/images/example.png';

import useStyles from './styles';

function InfoPanel() {
  const text = appText.landingPage.infoPanel;
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleOpenOffers = () => {
    navigate('/our-offer');
  };

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
      <img src={ExampleImage} className={classes.image} />
    </Box>
  );
}

export default InfoPanel;
