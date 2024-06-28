import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Dropdown } from './dropdown';

import HomeIcon from '@/assets/icon/home-icon.svg?react';
import OutlinedQuestionMark from '@/assets/icon/outlined-question-mark.svg?react';
import NotificationBell from '@/assets/icon/notification-bell.svg?react';
import ProfilePicture from '@/assets/icon/profile-picture.svg?react';
import ArrowDown from '@/assets/icon/arrow-down.svg?react';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.homePage.profileHeader;

export function Header() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState<null | HTMLElement>(null);
  const { classes } = useStyles();

  const handleOpenHomepage = () => {
    navigate('/homepage');
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setDropdown(event.currentTarget);
  };

  const handleIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (event.currentTarget.parentElement) {
      setDropdown(event.currentTarget.parentElement);
    }
  };

  const handleClose = () => {
    setDropdown(null);
  };

  return (
    <Box className={classes.wrapper}>
      <HomeIcon className={classes.homeIcon} onClick={handleOpenHomepage} />
      <Box className={classes.rightSide}>
        <OutlinedQuestionMark />
        <NotificationBell />
        <Box className={classes.userProfileBox}>
          <ProfilePicture />
          <Typography variant="body2" onClick={handleClick}>
            {text.name}
          </Typography>
          <ArrowDown onClick={handleIconClick} />
        </Box>
      </Box>
      <Dropdown dropdown={dropdown} handleClose={handleClose} />
    </Box>
  );
}
