import { useNavigate } from 'react-router-dom';

import { Box, Menu, MenuItem, Typography } from '@mui/material';

import { appText } from '@/constants/strings';

import Logout from '@/assets/icon/logout-icon.svg?react';
import ProfilePicture from '@/assets/icon/profile-picture.svg?react';

import { useStyles } from './styles';

interface IDropdownProps {
  dropdown: HTMLElement | undefined;
  handleClose: () => void;
}

const text = appText.homePage.profileHeader;

export function Dropdown({
  dropdown,
  handleClose,
}: IDropdownProps): React.ReactNode {
  const navigate = useNavigate();
  const { classes } = useStyles();

  function handleOpenUsersInfo(): void {
    navigate('/user');
  }
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
        <Box onClick={handleOpenUsersInfo}>
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
