import React, { useState } from 'react'
import logo from '/Images/logo.png'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// ✅ Array component ke bahar — har render pe recreate nahi hoga
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "REGISTRATION", path: "/registration" },
  { name: "TRAINING", path: "/training" },
  { name: "SERVICES", path: "/services" },
  { name: "PLACEMENT", path: "/placement" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT US", path: "/contact" }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 px-6 md:px-10 bg-black z-50'>
      <div className='h-16 w-full flex items-center justify-between'>

        {/* Logo */}
        <div className='h-12'>
          <img src={logo} alt="logo" className='h-12' />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                    : "text-white hover:text-blue-500 font-medium"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-black px-6 py-4">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                    : "text-white hover:text-blue-500 font-medium"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Header