import { Box, Dialog as MuiDialog } from '@mui/material';

import useStyles from './styles';

interface IModal {
  isOpen: boolean;
  handleClose?: () => void;
  children: JSX.Element;
}

export function Modal({ children, isOpen, handleClose, ...props }: IModal) {
  const { classes } = useStyles();

  return (
    <MuiDialog
      open={isOpen}
      className={classes.modalWrapper}
      onClose={handleClose}
      {...props}
    >
      <Box>{children}</Box>
    </MuiDialog>
  );
}
