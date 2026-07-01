import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import './BookingModal.css';

const SERVICES_DATA = {
  'Hair Care': [
    'Hair Cut & Styling (Women)',
    'Barber Hair Cut (Men)',
    'Premium Hair Spa & Therapy',
    'Keratin Smoothing Treatment',
    'Hair Botox Treatment',
    'Global Coloring & Balayage',
    'Deep Conditioning'
  ],
  'Facials & Skincare': [
    'Basic Herbal Facial',
    'Skin Brightening / Premium Facial',
    'Advanced Anti-Aging Facial',
    'D-Tan Glow Treatment',
    'Hydrating Skin Therapy'
  ],
  'Bridal & Makeup': [
    'Premium Bridal Makeup Package',
    'Elegant Reception Makeup',
    'Saphire Party Makeup',
    'Royal Groom Grooming Package'
  ],
  'Spa & Massages': [
    'Zen Signature Soul Healing',
    'Therapeutic Full Body Massage',
    'Jacuzzi Luxury Spa Massage',
    'Express Head & Shoulder Massage'
  ],
  'Grooming & Waxing': [
    'Threading (Eyebrows & Upper Lip)',
    'Full Face Grooming',
    'Rica Waxing (Arms & Legs)',
    'Brazilian Waxing'
  ]
};

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM'
];

export default function BookingModal({ isOpen, onClose, selectedServiceInit = '' }) {
  // Find initial category if service was preselected
  let initialCategory = 'Hair Care';
  if (selectedServiceInit) {
    for (const [cat, services] of Object.entries(SERVICES_DATA)) {
      if (services.includes(selectedServiceInit)) {
        initialCategory = cat;
        break;
      }
    }
  }

  const [category, setCategory] = useState(initialCategory);
  const [service, setService] = useState(selectedServiceInit || SERVICES_DATA[initialCategory][0]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setService(SERVICES_DATA[cat][0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !service || !date || !time || !name || !phone) {
      setError('Please fill in all the details.');
      return;
    }
    setError('');

    // Pre-fill WhatsApp message details
    const text = `Hello Zen Bloom! 🌸\n\nI would like to book a beauty & spa session:\n\n✨ *Appointment Request Details*:\n-------------------------------------\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🗂️ *Category:* ${category}\n💇 *Service:* ${service}\n📅 *Date:* ${date}\n⏰ *Time Slot:* ${time}\n-------------------------------------\n\nPlease confirm availability for this slot. Thank you!`;
    const whatsappUrl = `https://wa.me/919914314318?text=${encodeURIComponent(text)}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-header-section">
          <h2>Schedule Appointment</h2>
          <p>Choose your treatments. We'll connect you directly to WhatsApp for real-time confirmation.</p>
        </div>

        {error && <div className="modal-error-msg">{error}</div>}

        <form onSubmit={handleSubmit} className="modal-form">
          {/* Category Tabs */}
          <div className="form-group">
            <label className="form-label">1. Select Category</label>
            <div className="category-tabs-grid">
              {Object.keys(SERVICES_DATA).map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`cat-tab-btn ${category === cat ? 'active' : ''}`}
                >
                  {category === cat && <Check size={12} className="check-icon" />}
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="form-group">
            <label className="form-label" htmlFor="service-select">2. Select Service</label>
            <select
              id="service-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="form-input select-input"
            >
              {SERVICES_DATA[category].map((serv) => (
                <option key={serv} value={serv}>
                  {serv}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time Grid */}
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="booking-date">3. Choose Date</label>
              <div className="input-with-icon">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  id="booking-date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input date-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time-select">4. Choose Time</label>
              <div className="input-with-icon">
                <Clock size={18} className="input-icon" />
                <select
                  id="time-select"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-input select-input"
                  required
                >
                  <option value="">Select a time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="client-name">Your Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="client-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sneha Reddy"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="client-phone">Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  id="client-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9914314318"
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-gold btn-submit-booking">
            Confirm &amp; Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
