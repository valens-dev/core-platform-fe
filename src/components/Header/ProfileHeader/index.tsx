import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import HomeIcon from '@assets/icon/home-icon.svg?react';
import OutlinedQuestionMark from '@assets/icon/outlined-questionMark.svg?react';
import NotificationBell from '@assets/icon/notification-bell.svg?react';
import ProfilePicture from '@assets/icon/profile-picture.svg?react';
import ArrowDown from '@assets/icon/arrow-down.svg?react';

import useStyles from './styles';
import { appText } from '@utils/strings';

function ProfileHeader() {
  const text = appText.homepage.profileHeader;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <HomeIcon />
      <Box className={classes.rightSide}>
        <OutlinedQuestionMark />
        <NotificationBell />
        <Box className={classes.userProfileBox}>
          <ProfilePicture />
          <Typography variant="body2">{text.name}</Typography>
          <ArrowDown onClick={() => setIsDropDownOpen(!isDropDownOpen)} />
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileHeader;
