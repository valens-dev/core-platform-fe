import { Box, Typography } from '@mui/material'

import { appText } from '@utils/strings'

import Chip from '@shared/Chip'
import Button from '@shared/Button'

import { getCardsData } from './cards'

import ConnectAndCreate from '@assets/images/connect-and-create.png'

import useStyles from './styles'

function HowWeWork() {
  const text = appText.homepage.howWeWork
  const cards = getCardsData()
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box>
        <Chip label={text.workFlow} />
        <Typography variant="h2">{text.howWeWork}</Typography>
        <Box className={classes.cards}>
          {cards.map(({ title, description, Icon }, i) => (
            <Box className={classes.card} key={`${title}_${i}`}>
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
      <Box>
        <Typography variant="body1" className={classes.description}>
          {text.note}
        </Typography>
        <Button className={classes.bookADemoBtn}>
          <Typography variant="body2">{text.bookADemo}</Typography>
        </Button>
        <img src={ConnectAndCreate} className={classes.image} />
      </Box>
    </Box>
  )
}

export default HowWeWork
