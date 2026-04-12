import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { districtLinks } from '../data/districtRoutes'

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
  const [showTravelDropdown, setShowTravelDropdown] = useState(false)
  const { pathname } = useLocation()
  const isTravelPath = pathname.startsWith('/travel')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setShowTravelDropdown(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forest-900/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
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

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => {
            if (label === 'Travel') {
              return (
                <div 
                  key={to} 
                  className="relative group"
                  onMouseEnter={() => setShowTravelDropdown(true)}
                  onMouseLeave={() => setShowTravelDropdown(false)}
                >
                  <Link
                    to={to}
                    onClick={() => setShowTravelDropdown(false)}
                    className={`nav-link text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                      isTravelPath ? 'text-gold-400 active' : 'text-cream/80 hover:text-cream'
                    }`}
                  >
                    {label}
                  </Link>
                  <div 
                    className={`absolute top-[85%] left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      showTravelDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="w-56 rounded-xl border border-gold-300/30 bg-forest-900/95 backdrop-blur-md shadow-2xl p-2">
                      {districtLinks.map((district) => (
                        <Link
                          key={district.id}
                          to={district.to}
                          onClick={() => setShowTravelDropdown(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-body text-cream/85 hover:text-cream hover:bg-forest-700/80"
                        >
                          {district.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={to}
                to={to}
                className={`nav-link text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  pathname === to ? 'text-gold-400 active' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            to="/contact"
            className="btn-gold px-5 py-2 rounded-full text-forest-900 text-sm font-body font-semibold tracking-wide"
          >
            Book Now
          </Link>
        </div>

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

      <div
        className={`md:hidden bg-forest-900/98 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[34rem] py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6">
          {links.map(({ to, label }) => (
            <div key={to} className="w-full text-center">
               <Link
                to={to}
                onClick={() => setOpen(false)}
                className={`text-base font-body font-medium tracking-wide ${
                  label === 'Travel'
                    ? isTravelPath
                      ? 'text-gold-400'
                      : 'text-cream/80'
                    : pathname === to
                      ? 'text-gold-400'
                      : 'text-cream/80'
                }`}
              >
                {label}
              </Link>
              {label === 'Travel' && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {districtLinks.map((district) => (
                    <Link
                      key={district.id}
                      to={district.to}
                      onClick={() => setOpen(false)}
                      className="rounded-md border border-gold-300/20 py-1.5 text-xs font-body text-cream/85"
                    >
                      {district.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold w-full text-center px-5 py-2.5 rounded-full text-forest-900 text-sm font-body font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
