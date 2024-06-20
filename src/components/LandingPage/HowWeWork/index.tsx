import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import classnames from 'classnames';

import { appText } from '@utils/strings';

import Chip from '@shared/Chip';
import Button from '@shared/Button';

import { IHowWeWork } from '@utils/interfaces';

import { cardsData } from './constants';

import ConnectAndCreate from '@assets/images/connect-and-create.png';

import useStyles from './styles';

const HowWeWork: React.FC<IHowWeWork> = ({ scrollToContactUs }) => {
  const { classes } = useStyles();
  const text = appText.landingPage.howWeWork;
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftSide}>
        <Chip label={text.workFlow} />
        <Typography variant="h2">{text.howWeWork}</Typography>
        <Box className={classes.cards}>
          {cardsData.map(({ title, description, Icon }, index) => (
            <Box
              className={classnames(
                classes.generalCardStyle,
                activeCard === index ? classes.activeCard : classes.card
              )}
              key={`${title}_${index}`}
              onClick={() => setActiveCard(index)}
            >
              <Box className={classes.cardHeader}>
                <Icon />
                <Typography variant="body1">{title}</Typography>
              </Box>
              <Typography variant="body1" className={classes.description}>
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.rightSide}>
        <Typography variant="body1" className={classes.note}>
          {text.note}
        </Typography>
        <Button className={classes.bookADemoBtn} onClick={scrollToContactUs}>
          <Typography variant="body2">{text.bookADemo}</Typography>
        </Button>
        <Box className={classes.imagePosition}>
          <img
            src={ConnectAndCreate}
            className={classes.image}
            alt="Connect and Create"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWork;
