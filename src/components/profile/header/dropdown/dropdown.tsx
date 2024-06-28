import { Box, Typography, Menu, MenuItem } from '@mui/material';

import ProfilePicture from '@/assets/icon/profile-picture.svg?react';
import Logout from '@/assets/icon/logout-icon.svg?react';

import { appText } from '@/constants/strings';
import useStyles from './styles';

interface IDropdownProps {
  dropdown: HTMLElement | null;
  handleClose: () => void;
}

const text = appText.homePage.profileHeader;

export function Dropdown({ dropdown, handleClose }: IDropdownProps) {
  const { classes } = useStyles();

  return (
    <Menu
      anchorEl={dropdown}
      open={Boolean(dropdown)}
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
