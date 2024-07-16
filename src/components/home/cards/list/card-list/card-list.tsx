import { Box, Card, Typography } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

import { CARDS_DATA2 } from '@/components/home/cards/constants';

import { CardStatusVerification } from './card-status-verification/card-status-verification';

import { useStyles } from './styles';

export function CardList(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box>
      {CARDS_DATA2.map((card) => {
        return (
          <Card key={card.title} className={classes.cardList}>
            <Box className={classes.cardImageListWrapper}>
              <LazyImage
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
        );
      })}
    </Box>
  );
}
