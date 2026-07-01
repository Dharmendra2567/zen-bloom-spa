import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import './Header.css';

export default function Header({ currentPage, setCurrentPage, onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar for Desktop */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="contact-info">
            <span className="contact-item">
              <MapPin size={14} className="icon-gold" />
              <span>Peerzadiguda, Boduppal, Telangana</span>
            </span>
            <span className="contact-item">
              <Phone size={14} className="icon-gold" />
              <a href="tel:+919914314318">+91 9914314318</a>
            </span>
            <span className="contact-item">
              <Mail size={14} className="icon-gold" />
              <a href="mailto:zenbloom18@gmail.com">zenbloom18@gmail.com</a>
            </span>
          </div>
          <div className="social-handles">
            <a href="https://www.facebook.com/ZenBloomHairBeautySpa" target="_blank" rel="noreferrer" className="social-link">FB</a>
            <span className="divider">|</span>
            <a href="https://www.instagram.com/zenbloom_hair_beauty_spa/" target="_blank" rel="noreferrer" className="social-link">IG</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main glass">
        <div className="container main-header-container">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="logo-brand">
            <span className="logo-zen">Zen</span>
            <span className="logo-bloom">Bloom</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`nav-button ${currentPage === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Call to Action */}
          <div className="header-actions">
            <button onClick={onOpenBooking} className="btn btn-primary btn-book-nav">
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button 
            className="mobile-menu-close" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="mobile-logo-brand">
            <span className="logo-zen">Zen</span>
            <span className="logo-bloom">Bloom</span>
          </div>
          
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="mobile-nav-item">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`mobile-nav-button ${currentPage === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mobile-menu-footer">
            <button onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} className="btn btn-primary w-full">
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
            <div className="mobile-contact">
              <p>+91 9914314318</p>
              <p>zenbloom18@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
