import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactMe from './pages/Contactme/ContactMe'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </div>
  )
}

export default App
