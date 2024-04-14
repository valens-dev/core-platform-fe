import { Box, Typography } from '@mui/material'

import Line from '@shared/Line'

import { appText } from '@utils/strings'

import { getNavLinks } from '@components/Header/navLinks'

import DiscordIcon from '@assets/icon/discord.svg?react'
import FacebookIcon from '@assets/icon/facebook.svg?react'
import BasketballIcon from '@assets/icon/basketball.svg?react'
import InstagramIcon from '@assets/icon/instagram.svg?react'
import BeIcon from '@assets/icon/be.svg?react'

import useStyles from './styles'

function Footer() {
  const text = appText.footer
  const pages = getNavLinks()
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.links}>
        {pages.map(({ label }, i) => (
          <Typography key={`${label}_${i}`} variant="body1">
            {label}
          </Typography>
        ))}
      </Box>
      <Box className={classes.logos}>
        <DiscordIcon />
        <FacebookIcon />
        <BasketballIcon />
        <InstagramIcon />
        <BeIcon />
      </Box>
      <Line className={classes.line} />
      <Box className={classes.notes}>
        <Box>
          <Typography variant="body2" className={classes.footNote}>
            {text.footNote}
          </Typography>
        </Box>
        <Box className={classes.secondaryLinks}>
          <Typography variant="body2">{text.termsOfUse}</Typography>

          <Typography variant="body2">{text.privacyPolicy}</Typography>
          <Typography variant="body2">{text.security}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
