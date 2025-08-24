import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Home'
import Login from './pages/login'
import Footer from './components/Landing Page/footer'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
        </Routes>
                  <Footer />
    </Router>
  )
}

export default App