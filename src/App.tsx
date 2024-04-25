import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Provider from '@hoc/Provider/Provider'

import LandingPageLayout from '@components/Layout/LandingPageLayout'
import LandingPage from '@components/LandingPage'
import Auth from '@components/Auth'

import './App.css'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
