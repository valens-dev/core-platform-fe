import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import { AuthTab } from '@/types/auth';
import { ColorVariant } from '@/types/style';

import { appText } from '@/constants/strings';
import { NAV_LINKS } from '@/constants/navigation';

import CoreLogo from '@/assets/logo/core.svg?react';

import { useStyles } from './styles';

interface IHeaderProps {
  scrollToContactUs?: () => void;
  scrollToAboutUs?: () => void;
  scrollToHowWeWork?: () => void;
}

const text = appText.header;

export function Header({
  scrollToContactUs,
  scrollToAboutUs,
  scrollToHowWeWork,
}: IHeaderProps): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleScrollTo = (href: string): void => {
    if (href === 'contact' && scrollToContactUs) {
      scrollToContactUs();
    }
    if (href === 'about' && scrollToAboutUs) {
      scrollToAboutUs();
    }
    if (href === 'support' && scrollToHowWeWork) {
      scrollToHowWeWork();
    }
  };

  const handleOpenOffers = (): void => {
    navigate('/our-offer');
  };
  const handleLogoClick = (): void => {
    navigate('/');
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logo} onClick={handleLogoClick}>
        <CoreLogo />
      </Box>
      <Box className={classes.links}>
        {NAV_LINKS.map(({ label, href }, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
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
