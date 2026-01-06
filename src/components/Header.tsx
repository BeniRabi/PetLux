import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md py-3 shadow-xl shadow-navy-950/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:shadow-gold-400/30 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-navy-950" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-300 rounded-full opacity-60 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-semibold text-white tracking-wide">
                Pet<span className="text-gold-400">Lux</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400/80 font-medium">
                Silicon Valley
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <Link 
                key={to}
                to={to} 
                className={`relative font-body text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === to
                    ? 'text-gold-400'
                    : 'text-white/80 hover:text-gold-400'
                }`}
              >
                {label}
                {location.pathname === to && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                )}
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="luxury-btn inline-flex items-center gap-2 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-3 px-8 rounded-full shadow-lg hover:shadow-gold-400/30 transition-all duration-300"
            >
              <span>Book Experience</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-navy-900/95 backdrop-blur-lg rounded-2xl p-6 border border-gold-400/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ to, label }) => (
                <Link 
                  key={to}
                  to={to}
                  className={`font-body text-lg py-2 transition-colors ${
                    location.pathname === to
                      ? 'text-gold-400'
                      : 'text-white/80 hover:text-gold-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gold-400/20">
                <Link
                  to="/contact"
                  className="block text-center bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold py-3 px-6 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

