import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer({ setCurrentPage, onOpenBooking }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* About column */}
        <div className="footer-column footer-about">
          <button onClick={() => handleNavClick('home')} className="footer-logo">
            <span className="logo-zen">Zen</span>
            <span className="logo-bloom">Bloom</span>
          </button>
          <p className="footer-desc">
            Experience luxury hair, beauty, and wellness services at Zen Bloom Spa in Peerzadiguda. We believe that true beauty radiates from within, enhanced by expert care.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/ZenBloomHairBeautySpa" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/zenbloom_hair_beauty_spa/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/919914314318" target="_blank" rel="noreferrer" className="social-icon-btn text-whatsapp" aria-label="WhatsApp">
              <span className="whatsapp-text-btn">WA</span>
            </a>
          </div>
        </div>

        {/* Quick Links column */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><button onClick={() => handleNavClick('home')}>Home</button></li>
            <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
            <li><button onClick={() => handleNavClick('services')}>Our Services</button></li>
            <li><button onClick={() => handleNavClick('gallery')}>Gallery & Portfolio</button></li>
            <li><button onClick={() => handleNavClick('contact')}>Contact Us</button></li>
          </ul>
        </div>

        {/* Core Services column */}
        <div className="footer-column">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links">
            <li><button onClick={() => handleNavClick('services')}>Hair Styling & Cuts</button></li>
            <li><button onClick={() => handleNavClick('services')}>Facials & Skincare</button></li>
            <li><button onClick={() => handleNavClick('services')}>Bridal Makeover</button></li>
            <li><button onClick={() => handleNavClick('services')}>Massages & Spa</button></li>
            <li><button onClick={() => handleNavClick('services')}>Grooming Services</button></li>
          </ul>
        </div>

        {/* Operating Hours & Contact column */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <div className="contact-details">
            <div className="contact-row">
              <MapPin size={16} className="contact-icon" />
              <span>Opposite Decathlon, Peerzadiguda, Boduppal, Telangana - 500092</span>
            </div>
            <div className="contact-row">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+919914314318">+91 9914314318</a>
            </div>
            <div className="contact-row">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:zenbloom18@gmail.com">zenbloom18@gmail.com</a>
            </div>
            <div className="hours-block">
              <p className="hours-title">Working Hours:</p>
              <p>Monday - Sunday: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright-text">
            Copyright &copy; {new Date().getFullYear()} ZEN BLOOM HAIR &amp; BEAUTY SPA. All Rights Reserved. | <a href="https://bosonforge.vercel.app/" target="_blank" rel="noreferrer" className="developer-credit-link">built by BosonForge</a>
          </p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="dot"></span>
            <a href="#terms" className="legal-link">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
