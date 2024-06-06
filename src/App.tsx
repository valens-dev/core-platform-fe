import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Provider from "@hoc/Provider/Provider";
import HomePageLayout from "@components/Layout/HomePageLayout";
import LandingPageLayout from "@components/Layout/LandingPageLayout";
import LandingPage from "@components/LandingPage";
import Auth from "@components/Auth";
import HomePage from "@components/HomePage";
import "./App.css";

import OurOffer from "@components/OurOffer";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/our-offer" element={<OurOffer />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route element={<HomePageLayout />}>
            <Route path="/homepage" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
