import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { getNavLinks } from './navLinks';

import { ColorVariant } from '@models/styles';

import Button from '@shared/Button';

import CoreIcon from '@assets/logo/core.svg?react';

import { IHeader } from '@utils/interfaces';

import { appText } from '@utils/strings';
import { AuthTab } from '@utils/types';

import useStyles from './styles';

function Header({ scrollToContactUs }: IHeader) {
  const text = appText.header;
  const pages = getNavLinks();
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleScrollTo = (href: string) => {
    if (href === 'contact' && scrollToContactUs) scrollToContactUs();
  };

  const handleOpenOffers = () => {
    navigate('/our-offer');
  };
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logo} onClick={handleLogoClick}>
        <CoreIcon />
      </Box>
      <Box className={classes.links}>
        {pages.map(({ label, href }, i) => (
          <Box onClick={() => handleScrollTo(href)} key={`${label}_${i}`}>
            <Typography variant="body1">{label}</Typography>
          </Box>
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
          <Button
            className={classes.buttonStartFreeTrial}
            colorVariant={ColorVariant.Primary}
          >
            <Typography variant="body2">{text.startYourFreeTrial}</Typography>
          </Button>
          <Button
            variant="outlined"
            colorVariant={ColorVariant.Light}
            className={classes.buttonOurOffers}
            onClick={handleOpenOffers}
          >
            <Typography variant="body2">{text.ourOffers}</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
