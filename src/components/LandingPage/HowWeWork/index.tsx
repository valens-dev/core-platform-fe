import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import classnames from 'classnames'

import { appText } from '@utils/strings'

import Chip from '@shared/Chip'
import Button from '@shared/Button'

import { IHowWeWork } from '@utils/interfaces'

import { getCardsData } from './cards'

import ConnectAndCreate from '@assets/images/connect-and-create.png'

import useStyles from './styles'

function HowWeWork({ scrollToContactUs }: IHowWeWork) {
  const text = appText.landingPage.howWeWork
  const cards = getCardsData()
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftSide}>
        <Chip label={text.workFlow} />
        <Typography variant="h2">{text.howWeWork}</Typography>
        <Box className={classes.cards}>
          {cards.map(({ title, description, Icon }, index) => (
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
        <Button
          className={classes.bookADemoBtn}
          onClick={() => scrollToContactUs()}
        >
          <Typography variant="body2">{text.bookADemo}</Typography>
        </Button>
        <img src={ConnectAndCreate} className={classes.image} />
      </Box>
    </Box>
  )
}

export default HowWeWork
