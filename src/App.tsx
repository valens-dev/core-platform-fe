import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Provider from '@hoc/Provider/Provider'

import Auth from '@components/Auth'
import LandingPage from '@components/LandingPage'

import './App.css'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
