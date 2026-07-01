import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate submission
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page page-transition">
      {/* Hero Header */}
      <section className="contact-hero" style={{ backgroundImage: "url('/images/zen_bloom_massage_session.jpg')" }}>
        <div className="contact-hero-overlay"></div>
        <div className="container contact-hero-container">
          <h1 className="contact-hero-title animate-slide-up">Connect With Us</h1>
          <p className="contact-hero-subtitle animate-slide-up">Reach out to book a service or learn more about our custom packages</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section contact-body-section">
        <div className="container contact-grid-container">
          {/* Form Side */}
          <div className="contact-form-card glass">
            <h2>Send A Message</h2>
            <p>Have questions? Fill out the form below and we'll respond within 24 business hours.</p>
            
            {submitted && (
              <div className="success-toast">
                <CheckCircle2 className="toast-icon" />
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-2">
                <div className="form-group">
                  <label htmlFor="name-input">Your Name *</label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error-border' : ''}`}
                    placeholder="e.g. Sneha Reddy"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone-input">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error-border' : ''}`}
                    placeholder="e.g. 9914314318"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email Address *</label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error-border' : ''}`}
                  placeholder="e.g. sneha@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject-input">Subject</label>
                <input
                  type="text"
                  id="subject-input"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Bridal Package Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-input">Your Message *</label>
                <textarea
                  id="message-input"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input textarea-input ${errors.message ? 'error-border' : ''}`}
                  placeholder="Tell us about the treatments you are interested in..."
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-gold btn-send-message">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Coordinates Info Side */}
          <div className="contact-details-panel">
            <span className="section-subtitle">Our Coordinates</span>
            <h2>Visit Our Sanctuary</h2>
            <p className="panel-intro-text">
              We are located in Peerzadiguda, Hyderabad. Drop by or call to schedule an expert styling consultation.
            </p>

            <div className="info-cards-list">
              <div className="info-coord-card">
                <div className="coord-icon-box"><MapPin size={20} /></div>
                <div className="coord-text">
                  <h3>Our Location</h3>
                  <p>Raghavendra Nagar Colony, Bhagya Nagar Colony, Opposite Decathlon, Peerzadiguda, Boduppal, Telangana - 500092</p>
                  <a href="https://maps.app.goo.gl/epQJApmGAEsphAiv7" target="_blank" rel="noreferrer" className="coord-link">Get Directions on Maps →</a>
                </div>
              </div>

              <div className="info-coord-card">
                <div className="coord-icon-box"><Phone size={20} /></div>
                <div className="coord-text">
                  <h3>Phone &amp; WhatsApp</h3>
                  <p>Book instantly or inquire about packages:</p>
                  <a href="tel:+919914314318" className="coord-val">+91 9914314318</a>
                </div>
              </div>

              <div className="info-coord-card">
                <div className="coord-icon-box"><Mail size={20} /></div>
                <div className="coord-text">
                  <h3>Email Address</h3>
                  <p>For corporate partnerships or bridal inquiries:</p>
                  <a href="mailto:zenbloom18@gmail.com" className="coord-val">zenbloom18@gmail.com</a>
                </div>
              </div>

              <div className="info-coord-card">
                <div className="coord-icon-box"><Clock size={20} /></div>
                <div className="coord-text">
                  <h3>Operating Hours</h3>
                  <p>Open 7 Days a week:</p>
                  <p className="coord-val text-charcoal">Mon - Sun: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <iframe
          title="Zen Bloom Spa Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.037190013898!2d78.58334467597143!3d17.410034402155823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7f897368bb%3A0xe54d8fb866299f0e!2sZen%20Bloom%20Hair%20%26%20Beauty%20Spa!5e0!3m2!1sen!2sin!4v1719664426500!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
