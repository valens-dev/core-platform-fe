import { Box, Card, Typography } from '@mui/material';

import { CARDS_DATA2 } from '@/components/home/cards/constants';
import { CardStatusVerification } from './card-status-verification/card-status';

import { useStyles } from './styles';

export function CardList() {
  const { classes } = useStyles();

  return (
    <Box>
      {CARDS_DATA2.map((card, index) => (
        <Card className={classes.cardList} key={index}>
          <Box className={classes.cardImageListWrapper}>
            <img
              src={card.imgSrc}
              alt={card.altText}
              className={classes.cardImageList}
            />
            <Typography variant="h6" className={classes.cardTitleList}>
              {card.title}
            </Typography>
          </Box>
          <Typography variant="body2" className={classes.cardCreationList}>
            {card.creation}
          </Typography>
          <CardStatusVerification
            status={card.status}
            verification={card.verification}
          />
        </Card>
      ))}
    </Box>
  );
}
