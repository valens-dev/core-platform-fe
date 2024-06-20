import { Routes, Route, HashRouter } from 'react-router-dom';

import Provider from '@hoc/Provider/Provider';
import HomePageLayout from '@components/Layout/HomePageLayout';
import LandingPageLayout from '@components/Layout/LandingPageLayout';
import LandingPage from '@components/LandingPage';
import Auth from '@components/Auth';
import HomePage from '@components/HomePage';

import OurOffer from '@components/OurOffer';
import TemplatesPage from '@components/TemplatesPage';

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
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
