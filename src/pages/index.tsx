import { Route, Routes, HashRouter } from 'react-router-dom';

import { RootProvider } from '@/context/root-provider';

import { Auth } from '@/components/auth';

import { HomeLayout } from '@/layouts/home-layout';
import { LandingLayout } from '@/layouts/landing-layout';
import { WorkspaceLayout } from '@/layouts/workspace-layout';

import { HomePage } from '@/pages/home-page';
import { LandingPage } from '@/pages/landing-page';
import { OurOfferPage } from '@/pages/our-offer-page';
import { TemplatesPage } from '@/pages/templates-page';
import { WorkspacePage } from '@/pages/workspace-page';

import '@/styles/global.css';

export function App(): React.ReactNode {
  return (
    <RootProvider>
      <HashRouter>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/our-offer" element={<OurOfferPage />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route element={<HomeLayout />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/homepage/templates" element={<TemplatesPage />} />
          </Route>
          <Route element={<WorkspaceLayout />}>
            <Route path="/workspace" element={<WorkspacePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </RootProvider>
  );
}
