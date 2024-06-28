import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/profile/header';
import useStyles from './styles';

export function HomeLayout() {
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.contentWrapper}>
        <Outlet />
      </Box>
    </>
  );
}
