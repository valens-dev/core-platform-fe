import { FC } from "react";
import { Box, Button, Typography, IconButton, Popover } from "@mui/material";

import CloseIcon from "@assets/icon/x-icon.svg?react";

import useStyles from "./styles";
import { appText } from "@utils/strings";

interface ITourPopupProps {
  open: boolean;
  refEl: HTMLElement | null;
  handleClose: () => void;
}

const TourPopup: FC<ITourPopupProps> = ({ open, refEl, handleClose }) => {
  const text = appText.homepage.tourPopup;
  const { classes } = useStyles();

  return (
    <Popover
      open={open}
      anchorEl={refEl}
      onClose={handleClose}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      className={classes.tourPopup}
    >
      <Box className={classes.popupContent}>
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
    </Popover>
  );
};

export default TourPopup;
