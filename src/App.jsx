import './App.css'
import AuthPage from './pages/AuthPage/AuthPage'
import StartPage from './pages/StartPage/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
