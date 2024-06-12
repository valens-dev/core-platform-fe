import { Box, Card, CardContent, Typography } from "@mui/material";

import { cardData } from "@utils/strings";

import useStyles from "./styles";

function Cards() {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardsWrapper}>
      {cardData.map((card, index) => (
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

export default Cards;
