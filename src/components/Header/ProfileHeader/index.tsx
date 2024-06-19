import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import HomeIcon from '@assets/icon/home-icon.svg?react';
import OutlinedQuestionMark from '@assets/icon/outlined-questionMark.svg?react';
import NotificationBell from '@assets/icon/notification-bell.svg?react';
import ProfilePicture from '@assets/icon/profile-picture.svg?react';
import ArrowDown from '@assets/icon/arrow-down.svg?react';
import { appText } from '@utils/strings';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';

import useStyles from './styles';

function ProfileHeader() {
  const text = appText.homepage.profileHeader;
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState<null | HTMLElement>(null);
  const { classes } = useStyles();

  const handleOpenHomepage = () => {
    navigate('/homepage');
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setDropDown(event.currentTarget);
  };

  const handleIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (event.currentTarget.parentElement) {
      setDropDown(event.currentTarget.parentElement);
    }
  };

  const handleClose = () => {
    setDropDown(null);
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
      <DropDown dropDown={dropDown} handleClose={handleClose} />
    </Box>
  );
}

export default ProfileHeader;
