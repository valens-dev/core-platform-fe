import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header } from '@/components/workspace/header';

export function WorkspaceLayout(): React.ReactNode {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
