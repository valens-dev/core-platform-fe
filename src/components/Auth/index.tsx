import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import classnames from 'classnames'

import Login from './Login'
import Registration from './Registration'
import SocialAuthButtons from './SocialAuthButtons'

import useStyles from './styles'
import { useLocation } from 'react-router-dom'

export enum AuthTab {
  Login = 'login',
  Registration = 'registration',
}

interface IAuth {
  tab?: AuthTab
}

const Auth: React.FC<IAuth> = ({ tab = AuthTab.Login }) => {
  const [activeTab, setActiveTab] = useState(tab)
  const location = useLocation()
  const { classes } = useStyles()

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab)
    }
  }, [])

  const isActiveTabLogin = activeTab === AuthTab.Login
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <div className={classes.infoDetails}>
          <div className={classes.openingMessage}>
            <Typography
              variant="body1"
              className={classnames(classes.text, classes.welcomeToText)}
            >
              Welcome to
            </Typography>
            <span
              className={classnames(classes.text, classes.corePlatformText)}
            >
              Core Platform
            </span>
          </div>
          <Typography variant="body2" className={classes.lightText}>
            Kindly fill in your details below to create an account
          </Typography>
        </div>
        <div className={classes.tabs}>
          <div onClick={() => setActiveTab(AuthTab.Login)}>
            <Typography
              variant="body1"
              className={
                isActiveTabLogin
                  ? classnames(classes.tab, classes.activeTab)
                  : classes.tab
              }
            >
              Login
            </Typography>
          </div>
          <div
            onClick={() => setActiveTab(AuthTab.Registration)}
            className={
              !isActiveTabLogin
                ? classnames(classes.tab, classes.activeTab)
                : classes.tab
            }
          >
            <Typography variant="body1">Sign Up</Typography>
          </div>
        </div>
        <div className={classes.line}></div>
        {isActiveTabLogin ? <Login /> : <Registration />}
        <SocialAuthButtons isActiveTabLogin={isActiveTabLogin} />
      </div>
    </div>
  )
}

export default Auth
