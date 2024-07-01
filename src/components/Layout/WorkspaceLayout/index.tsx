import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import WorkspaceHeader from '@components/Header/WorkspaceHeader';

function HomePageLayout() {
  return (
    <>
      <WorkspaceHeader />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default HomePageLayout;
