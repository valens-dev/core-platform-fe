import { HashRouter, Route, Routes } from 'react-router-dom';

import { Auth } from '@/components/auth';
import { HomePage } from '@/pages/home-page';
import { LandingPage } from '@/pages/landing-page';
import { HomeLayout } from '@/layouts/home-layout';
import { LandingLayout } from '@/layouts/landing-layout';
import RootProvider from '@/context/root-provider';

import { OurOfferPage } from '@/pages/our-offer-page';
import { TemplatesPage } from '@/pages/templates-page';

import { WorkspaceLayout } from '@/layouts/workspace-layout';
import { WorkspacePage } from '@/pages/workspace-page';

import '@/styles/global.css';

export function App() {
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
