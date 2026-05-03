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
import Header from './Components/Header'
import Notice from './Components/Notice'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Notice/>
        <Header/>
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
        <Footer/>
      </Router>
    </>
  )
}

export default App