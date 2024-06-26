import { forwardRef } from 'react';

import { Box, Button, Popper, Typography, IconButton } from '@mui/material';

import { appText } from '@/constants/strings';

import CloseIcon from '@/assets/icon/x-icon.svg?react';

import { useStyles } from './styles';

interface ITourPopupProps {
  open: boolean;
  refEl: HTMLElement | null;
  handleClose: () => void;
}

const text = appText.homePage.tourPopup;

export const TourPopup = forwardRef<HTMLDivElement, ITourPopupProps>(
  ({ open, refEl, handleClose }, ref) => {
    const { classes } = useStyles();

    return (
      <Popper
        open={open}
        anchorEl={refEl}
        placement="top-start"
        className={classes.tourPopup}
      >
        <Box ref={ref} className={classes.popupContent}>
          <Typography variant="h6" className={classes.popupTitle}>
            {text.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={`${classes.closeButton} ${classes.closeIcon}`}
          >
            <CloseIcon />
          </IconButton>
          <Typography className={classes.popupText}>{text.content}</Typography>
          <Box className={classes.actions}>
            <Button onClick={handleClose} className={classes.popupButton}>
              {text.noThanks}
            </Button>
            <Button onClick={handleClose} className={classes.popupButton}>
              {text.yes}
            </Button>
          </Box>
        </Box>
      </Popper>
    );
  },
);

TourPopup.displayName = 'TourPopup';
