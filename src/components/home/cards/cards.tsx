import { Box, Card, Typography, CardContent } from '@mui/material';

import { CARDS_DATA } from './constants';

import { useStyles } from './styles';

export function Cards(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardsWrapper}>
      {CARDS_DATA.map((card, index) => (
        <Card className={classes.card} key={index}>
          <img
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
      ))}
    </Box>
  );
}
