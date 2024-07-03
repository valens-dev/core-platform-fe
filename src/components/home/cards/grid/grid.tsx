import { Box, Card, Typography, CardContent } from '@mui/material';

import { LazyImage } from '@/shared/lazy-image';

import { CARDS_DATA } from '../constants';

import { useStyles } from './styles';

export function Grid(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardsWrapper}>
      {CARDS_DATA.map((card) => {
        return (
          <Card key={card.title} className={classes.card}>
            <LazyImage
              src={card.imgSrc}
              alt={card.altText}
              className={classes.cardImage}
            />
            <CardContent>
              <Typography variant="h6" className={classes.cardTitle}>
                {card.title}
              </Typography>
              <Typography variant="body2" className={classes.cardCreation}>
                {card.creation}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
