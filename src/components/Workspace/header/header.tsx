import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Dropdown } from '@/components/profile/header/dropdown';

import { appText } from '@/constants/strings';

import HomeIcon from '@/assets/icon/home-icon.svg?react';
import ArrowDown from '@/assets/icon/arrow-down.svg?react';
import ProfilePicture from '@/assets/icon/profile-picture.svg?react';
import NotificationBell from '@/assets/icon/notification-bell.svg?react';
import OutlinedQuestionMark from '@/assets/icon/outlined-question-mark.svg?react';

import { HeaderTabs } from './header-tabs';

import { useStyles } from './styles';

const TEXT = appText.workspacePage;

export function Header(): React.ReactNode {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState<null | HTMLElement>();
  const { classes } = useStyles();

  const handleOpenHomepage = (): void => {
    navigate('/homepage');
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setDropdown(event.currentTarget);
  };

  const handleIconClick = (event: React.MouseEvent<SVGSVGElement>): void => {
    if (event.currentTarget.parentElement) {
      setDropdown(event.currentTarget.parentElement);
    }
  };

  const handleClose = (): void => {
    setDropdown(undefined);
  };

  return (
    <Box className={classes.wrapper}>
      <HomeIcon className={classes.homeIcon} onClick={handleOpenHomepage} />
      <HeaderTabs />
      <Box className={classes.rightSide}>
        <OutlinedQuestionMark />
        <NotificationBell />
        <Box className={classes.userProfileBox}>
          <ProfilePicture />
          <Typography variant="body2" onClick={handleClick}>
            {TEXT.profileHeader.name}
          </Typography>
          <ArrowDown onClick={handleIconClick} />
        </Box>
      </Box>
      <Dropdown dropdown={dropdown} handleClose={handleClose} />
    </Box>
  );
}
