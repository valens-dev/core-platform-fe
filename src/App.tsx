import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'
import Homepage from './components/Homepage'
import Provider from './hoc/Provider/Provider'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
