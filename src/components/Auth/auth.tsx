import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import classnames from 'classnames';

import { Box, Typography } from '@mui/material';

import { Line } from '@/shared/line';

import { AuthTab } from '@/types/auth';

import { appText } from '@/constants/strings';

import { Login } from './login';
import { Registration } from './registration';
import { SocialAuthButtons } from './social-auth-buttons';

import { IAuthProps } from './types';

import useStyles from './styles';

const text = appText.auth;

export function Auth({ tab = AuthTab.Login }: IAuthProps) {
  const [activeTab, setActiveTab] = useState(tab);
  const location = useLocation();
  const { classes } = useStyles();

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, []);

  const isActiveTabLogin = activeTab === AuthTab.Login;
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
  );
}
