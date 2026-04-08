import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/travel', label: 'Travel' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forest-900/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 leading-none group">
          <img
            src="/hotel/logo.png"
            alt="Hotel Ospite Residency logo"
            className="h-10 w-auto rounded-md object-contain"
          />
          <span className="flex flex-col">
            <span
              className="text-2xl font-display font-semibold text-gold-400 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Hotel Ospite
            </span>
            <span className="text-xs tracking-[0.3em] uppercase text-cream/70 font-body">
              Residency · Gangtok
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                pathname === to
                  ? 'text-gold-400 active'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gold px-5 py-2 rounded-full text-forest-900 text-sm font-body font-semibold tracking-wide"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-0.5 bg-gold-400 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-gold-400 transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gold-400 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-forest-900/98 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-base font-body font-medium tracking-wide ${
                pathname === to ? 'text-gold-400' : 'text-cream/80'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gold w-full text-center px-5 py-2.5 rounded-full text-forest-900 text-sm font-body font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
