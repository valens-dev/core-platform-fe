import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

import Login from './Login'
import Registration from './Registration'
import SocialAuthButtons from './SocialAuthButtons'
import Line from '../../shared/Line'

import { IAuth } from '../../utils/interfaces'
import { AuthTab } from '../../utils/types'

import useStyles from './styles'
import { appText } from '../../utils/strings'

function Auth({ tab = AuthTab.Login }: IAuth) {
  const [activeTab, setActiveTab] = useState(tab)
  const location = useLocation()
  const text = appText.auth
  const { classes } = useStyles()

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab)
    }
  }, [])

  const isActiveTabLogin = activeTab === AuthTab.Login
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.box}>
        <Box className={classes.infoDetails}>
          <Box className={classes.openingMessage}>
            <Typography
              variant="body1"
              className={classnames(classes.text, classes.welcomeToText)}
            >
              {text.welcomeTo}
            </Typography>
            <span
              className={classnames(classes.text, classes.corePlatformText)}
            >
              {text.corePlatform}
            </span>
          </Box>
          <Typography variant="body2" className={classes.lightText}>
            {text.note}
          </Typography>
        </Box>
        <Box className={classes.tabs}>
          <Box onClick={() => setActiveTab(AuthTab.Login)}>
            <Typography
              variant="body1"
              className={
                isActiveTabLogin
                  ? classnames(classes.tab, classes.activeTab)
                  : classes.tab
              }
            >
              {text.loginText}
            </Typography>
          </Box>
          <Box
            onClick={() => setActiveTab(AuthTab.Registration)}
            className={
              !isActiveTabLogin
                ? classnames(classes.tab, classes.activeTab)
                : classes.tab
            }
          >
            <Typography variant="body1">{text.signUp}</Typography>
          </Box>
        </Box>
        <Line className={classes.line} />
        {isActiveTabLogin ? <Login /> : <Registration />}
        <SocialAuthButtons isActiveTabLogin={isActiveTabLogin} />
      </Box>
    </Box>
  )
}

export default Auth
