import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { getNavLinks } from './navLinks'

import { ColorVariant } from '@models/styles'

import Button from '@shared/Button'

import CoreIcon from '@assets/logo/core.svg?react'

import { appText } from '@utils/strings'
import { AuthTab } from '@utils/types'

import useStyles from './styles'

function Header() {
  const text = appText.header
  const pages = getNavLinks()
  const navigate = useNavigate()
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logo}>
        <CoreIcon />
      </Box>
      <Box className={classes.links}>
        {pages.map(({ label }, i) => (
          <Typography key={`${label}_${i}`} variant="body1">
            {label}
          </Typography>
        ))}
      </Box>
      <Box className={classes.buttonsAndLinks}>
        <Box className={classes.auth}>
          <Typography
            variant="body2"
            onClick={() => navigate('/auth', { state: { tab: AuthTab.Login } })}
          >
            {text.login}
          </Typography>
          <Typography
            variant="body2"
            onClick={() =>
              navigate('/auth', { state: { tab: AuthTab.Registration } })
            }
          >
            {text.signUp}
          </Typography>
        </Box>
        <Box className={classes.buttons}>
          <Button colorVariant={ColorVariant.Primary}>
            <Typography variant="body2">{text.startYourFreeTrial}</Typography>
          </Button>
          <Button
            variant="outlined"
            colorVariant={ColorVariant.Light}
            className={classes.bookADemoBtn}
          >
            <Typography variant="body2">{text.ourOffers}</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Header
