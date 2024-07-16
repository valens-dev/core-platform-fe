import { useState } from 'react';

import classnames from 'classnames';

import { Box, Typography } from '@mui/material';

import { Chip } from '@/shared/chip';
import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import ConnectAndCreate from '@/assets/image/connect-and-create.webp';

import { CARDS_DATA } from './constants';

import { useStyles } from './styles';

interface IHowWeWorkProps {
  howWeWorkRef: React.RefObject<HTMLDivElement>;
  scrollToContactUs: () => void;
}

const text = appText.landingPage.howWeWork;

export function HowWeWork({
  howWeWorkRef,
  scrollToContactUs,
}: IHowWeWorkProps): React.ReactNode {
  const { classes } = useStyles();
  const [activeCard, setActiveCard] = useState<number | null>();

  return (
    <Box className={classes.wrapper} ref={howWeWorkRef}>
      <Box className={classes.leftSide}>
        <Chip label={text.workFlow} />
        <Typography variant="h2">{text.howWeWork}</Typography>
        <Box className={classes.cards}>
          {CARDS_DATA.map(({ title, description, Icon }, index) => {
            return (
              <Box
                className={classnames(
                  classes.generalCardStyle,
                  activeCard === index ? classes.activeCard : classes.card,
                )}
                /* eslint-disable-next-line react/no-array-index-key */
                key={`${title}_${index}`}
                onClick={() => {
                  setActiveCard(index);
                }}
              >
                <Box className={classes.cardHeader}>
                  <Icon />
                  <Typography variant="body1">{title}</Typography>
                </Box>
                <Typography variant="body1" className={classes.description}>
                  {description}
                </Typography>
              </Box>
            );
          })}
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
}
