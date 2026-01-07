import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Components/About.jsx'
import PageNotFound from './Components/PageNotFound.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>
  )
}

export default App