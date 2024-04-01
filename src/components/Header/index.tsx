import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { AuthTab } from '../../utils/types'
import { ColorVariant } from '../../models/styles'
import Button from '../../shared/Button'
import { getNavLinks } from './navLinks'
import { appText } from '../../utils/strings'

import useStyles from './styles'

function Header() {
  const pages = getNavLinks()
  const navigate = useNavigate()
  const text = appText.header
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logo}>
        <Typography variant="h4">Core</Typography>
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
          <Button variant="outlined" colorVariant={ColorVariant.Light}>
            <Typography variant="body2">{text.bookADemo}</Typography>
          </Button>
          <Button colorVariant={ColorVariant.Primary}>
            {text.startYourFreeTrial}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default Header
