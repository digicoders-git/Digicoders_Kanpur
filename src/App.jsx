import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Registration from './Pages/Registration'
import Placement from './Pages/Placement'
import Training from './Pages/Training'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/placement' element={<Placement/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App