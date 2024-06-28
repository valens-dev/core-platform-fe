import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/workspace/header';

export function WorkspaceLayout() {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
