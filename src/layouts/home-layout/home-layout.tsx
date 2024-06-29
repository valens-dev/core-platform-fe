import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header } from '@/components/profile/header';

import useStyles from './styles';

export function HomeLayout(): JSX.Element {
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
