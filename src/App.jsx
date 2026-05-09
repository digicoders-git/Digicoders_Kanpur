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
import { IoCall } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'

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
        {/* Side floating buttons */}
        <button className='hidden md:block fixed text-white px-2 py-1 bg-orange-600 rotate-90 left-[-57px] top-1/2 -translate-y-1/2 z-30 text-sm font-semibold'>
          Assessment Portal
        </button>
        <button className='hidden md:block fixed text-white px-2 py-1 bg-green-600 rotate-90 right-[-63px] top-1/2 -translate-y-1/2 z-30 text-sm font-semibold'>
          Register For Training
        </button>

        {/* Call & WhatsApp FABs */}
        <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
          <a href="tel:+919198483820"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <IoCall />
          </a>
          <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <FaWhatsapp />
          </a>
        </div>
      </Router>

      
    </>
  )
}

export default App