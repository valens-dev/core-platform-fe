import { HashRouter, Route, Routes } from 'react-router-dom';

import Auth from '@components/Auth';
import HomePage from '@components/HomePage';
import LandingPage from '@components/LandingPage';
import HomePageLayout from '@components/Layout/HomePageLayout';
import LandingPageLayout from '@components/Layout/LandingPageLayout';
import Provider from '@hoc/Provider/Provider';

import OurOffer from '@components/OurOffer';
import TemplatesPage from '@components/TemplatesPage';

import WorkspaceLayout from '@components/Layout/WorkspaceLayout';
import Workspace from '@components/Workspace';

import './App.css';

function App() {
  return (
    <Provider>
      <HashRouter>
        <Routes>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/our-offer" element={<OurOffer />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route element={<HomePageLayout />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/homepage/templates" element={<TemplatesPage />} />
          </Route>
          <Route element={<WorkspaceLayout />}>
            <Route path="/workspace" element={<Workspace />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
