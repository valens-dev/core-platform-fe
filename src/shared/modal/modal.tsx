import { Box, Typography, Dialog as MuiDialog } from '@mui/material';

import XIcon from '@/assets/icon/x-icon.svg?react';

import { useStyles } from './styles';

interface IModal {
  isOpen: boolean;
  handleClose?: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({
  children,
  isOpen,
  handleClose,
  title,
  ...props
}: IModal): React.ReactNode {
  const { classes } = useStyles();

  return (
    <MuiDialog
      open={isOpen}
      className={classes.modalWrapper}
      onClose={handleClose}
      {...props}
    >
      <Box className={classes.titleAndCloseButton}>
        <Typography variant="h6">{title}</Typography>
        <XIcon onClick={handleClose} className={classes.closeButton} />
      </Box>
      <Box>{children}</Box>
    </MuiDialog>
  );
}
