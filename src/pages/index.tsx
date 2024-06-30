import { lazy, Suspense } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import { RootProvider } from '@/context/root-provider';

import { Box, CircularProgress } from '@mui/material';

import { Auth } from '@/components/auth';

import { HomeLayout } from '@/layouts/home-layout';
import { LandingLayout } from '@/layouts/landing-layout';
import { WorkspaceLayout } from '@/layouts/workspace-layout';

import '@/styles/global.css';

const HomePage = lazy(async () => {
  return import('@/pages/home-page/home-page');
});

const LandingPage = lazy(async () => {
  return import('@/pages/landing-page/landing-page');
});

const OurOfferPage = lazy(async () => {
  return import('@/pages/our-offer-page/our-offer-page');
});

const TemplatesPage = lazy(() => {
  return import('@/pages/templates-page/templates-page');
});

const WorkspacePage = lazy(() => {
  return import('@/pages/workspace-page/workspace-page');
});

function PageLoader(): React.ReactNode {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export function App(): React.ReactNode {
  return (
    <RootProvider>
      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route element={<LandingLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/our-offer" element={<OurOfferPage />} />
            </Route>

            <Route element={<HomeLayout />}>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/homepage/templates" element={<TemplatesPage />} />
            </Route>

            <Route element={<WorkspaceLayout />}>
              <Route path="/workspace" element={<WorkspacePage />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </RootProvider>
  );
}
