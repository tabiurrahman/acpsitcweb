
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'History', path: '/history' },
    { name: 'Contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Only do section detection on home page
      if (location.pathname === '/') {
        const sections = ['about', 'sectors', 'testimonials', 'gallery', 'contact'];
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        // Check if we're at the very top
        if (window.scrollY < 100) {
          setActiveItem('Home');
          return;
        }

        // Find the current section
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              const sectionName = sectionId === 'sectors' ? 'Home' : 
                                 sectionId === 'testimonials' ? 'Home' :
                                 sectionId === 'gallery' ? 'Home' :
                                 sectionId === 'about' ? 'Home' :
                                 'Contact';
              setActiveItem(sectionName);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Set active menu item based on path or hash
  useEffect(() => {
    // First check for exact path matches
    const exactMatch = navLinks.find(link => link.path === location.pathname);
    
    if (exactMatch) {
      setActiveItem(exactMatch.name);
      return;
    }
    
    // For hash links, only set them active if explicitly clicked
    // This prevents Contact from being highlighted on home page by default
    if (location.hash && location.hash.length > 1) {
      const hashMatch = navLinks.find(link => 
        link.path.includes(location.hash) && link.path.startsWith('/#')
      );
      
      if (hashMatch) {
        setActiveItem(hashMatch.name);
        return;
      }
    }
    
    // Default to Home for root path with no hash
    if (location.pathname === '/' && !location.hash) {
      setActiveItem('Home');
    }
  }, [location.pathname, location.hash]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (linkName) => {
    setActiveItem(linkName);
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-tech-dark/90 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/ede390a1-f65c-4a66-8f23-95a4b7728456.png" 
            alt="ACPSITC Logo" 
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-orbitron tech-gradient-text">ACPSITC</span>
            <span className="text-xs text-foreground/70">Adamjee Cantonment Public School IT Club</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${activeItem === link.name ? 'active' : ''}`}
              onClick={() => {
                handleNavClick(link.name);
                if (link.path.startsWith('/#')) {
                  const element = document.getElementById(link.path.substring(2));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-tech-dark/95 backdrop-blur-md z-40 flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-orbitron py-2 border-b border-tech-purple/20 ${
                  activeItem === link.name ? 'text-tech-purple' : 'text-foreground'
                }`}
                onClick={() => {
                  handleNavClick(link.name);
                  if (link.path.startsWith('/#')) {
                    setTimeout(() => {
                      const element = document.getElementById(link.path.substring(2));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
