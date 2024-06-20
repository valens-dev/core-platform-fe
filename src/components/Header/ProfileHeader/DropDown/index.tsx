import { Box, Typography, Menu, MenuItem } from '@mui/material';

import { IDropDownProps } from './interfaces';

import ProfilePicture from '@assets/icons/profile-picture.svg?react';
import Logout from '@assets/icons/logout-icon.svg?react';

import { appText } from '@utils/strings';
import useStyles from './styles';

function DropDown({ dropDown, handleClose }: IDropDownProps) {
  const text = appText.homepage.profileHeader;

  const { classes } = useStyles();

  return (
    <Menu
      anchorEl={dropDown}
      open={Boolean(dropDown)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      classes={{ paper: classes.menu }}
    >
      <MenuItem className={classes.menuItem} onClick={handleClose}>
        <ProfilePicture />
        <Box>
          <Typography variant="body2" className={classes.userName}>
            {text.name}
          </Typography>
          <Typography variant="caption" className={classes.emailTitle}>
            {text.email}
          </Typography>
        </Box>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.logoutMenu}>
        <Logout />
        <Typography variant="body2">{text.logout}</Typography>
      </MenuItem>
    </Menu>
  );
}

export default DropDown;
