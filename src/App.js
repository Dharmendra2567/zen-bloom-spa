import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  // Render the current page dynamically
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onOpenBooking={handleOpenBooking} />;
      case 'about':
        return <About onOpenBooking={handleOpenBooking} />;
      case 'services':
        return <Services onOpenBooking={handleOpenBooking} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Page Area */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Floating WhatsApp Quick Link */}
      <a 
        href="https://wa.me/919914314318?text=Hello%20Zen%20Bloom%2C%20I&#x27;d%20like%20to%20inquire%20about%20your%20services!" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        WA
      </a>

      {/* Universal Footer */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Interactive Booking Scheduler Modal */}
      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          selectedServiceInit={selectedService} 
        />
      )}
    </div>
  );
}

export default App;
