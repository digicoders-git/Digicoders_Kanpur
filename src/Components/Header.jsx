import React, { useState, useEffect } from 'react'
import logo from '/Images/logo1.png'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: "HOME",         path: "/" },
  { name: "ABOUT",        path: "/about" },
  { name: "REGISTRATION", path: "/registration" },
  { name: "TRAINING",     path: "/training" },
  { name: "SERVICES",     path: "/services" },
  { name: "PLACEMENT",    path: "/placement" },
  { name: "GALLERY",      path: "/gallery" },
  { name: "CONTACT US",   path: "/contact" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 px-6 md:px-10 text-black bg-white z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <div className='h-16 w-full flex items-center justify-between'>

        {/* Logo */}
        <div className='h-12'>
          <img src={logo} alt="DigiCoders logo" className='h-12' />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleScrollTop}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-sm pb-0.5 border-b-2 transition-colors"
                    : "font-medium text-sm text-gray-700 transition-colors hover:text-orange-500"
                }
                style={({ isActive }) =>
                  isActive
                    ? { color: '#ff8c00', borderColor: '#ff8c00' }
                    : {}
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen
              ? <X size={22} className="text-gray-800" />
              : <Menu size={22} className="text-gray-800" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-1 bg-white px-2 pb-4 border-t border-gray-100">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => { setIsOpen(false); handleScrollTop(); }}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold"
                    : "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-orange-50"
                }
                style={({ isActive }) =>
                  isActive
                    ? { color: '#ff8c00', background: '#fff3e0' }
                    : {}
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="mt-2 px-3">
            <a
              href="/registration"
              onClick={() => { setIsOpen(false); handleScrollTop(); }}
              className="block text-center w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors"
              style={{ background: '#ff8c00' }}
            >
              Register for Training
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
