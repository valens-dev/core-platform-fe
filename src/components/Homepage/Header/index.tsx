import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ColorVariant } from '../../../models/styles'
import Button from '../../../shared/Button'
import { AuthTab } from '../../Auth'
import { getNavLinks } from './navLinks'
import useStyles from './styles'

function Header() {
  const pages = getNavLinks()
  const navigate = useNavigate()
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <Typography variant="h4">Core</Typography>
      </div>
      <div className={classes.links}>
        {pages.map(({ label }, i) => (
          <Typography key={`${label}_${i}`} variant="body1">
            {label}
          </Typography>
        ))}
      </div>
      <div className={classes.buttonsAndLinks}>
        <div className={classes.auth}>
          <Typography
            variant="body2"
            onClick={() => navigate('/auth', { state: { tab: AuthTab.Login } })}
          >
            Login
          </Typography>
          <Typography
            variant="body2"
            onClick={() =>
              navigate('/auth', { state: { tab: AuthTab.Registration } })
            }
          >
            Sign Up
          </Typography>
        </div>
        <div className={classes.buttons}>
          <Button variant="outlined" colorVariant={ColorVariant.Light}>
            <Typography variant="body2">Book a demo</Typography>
          </Button>
          <Button colorVariant={ColorVariant.Primary}>
            Start your free trial
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Header
