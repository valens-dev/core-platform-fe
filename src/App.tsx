import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Auth from './components/Auth'
import Provider from './hoc/Provider/Provider'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
