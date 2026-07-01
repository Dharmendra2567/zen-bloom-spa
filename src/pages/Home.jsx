import React, { useState } from 'react';
import { Calendar, Compass, ArrowRight, ShieldCheck, Heart, Sparkles, Check, ChevronDown, Star } from 'lucide-react';
import './Home.css';

const FAQ_DATA = [
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, we do accept walk-ins based on our specialists' availability. However, to guarantee your preferred slot and avoid waiting, we highly recommend booking your appointment in advance."
  },
  {
    question: "How can I book an appointment?",
    answer: "Booking is simple! Click any 'Book Appointment' button on our website. It opens our scheduler where you can select your category, service, and preferred date/time. Clicking confirm compiles your request into a neat WhatsApp text and directs you straight to us for real-time booking."
  },
  {
    question: "What are your operating hours?",
    answer: "We are open seven days a week, Monday through Sunday, from 9:00 AM to 8:00 PM. Our last session bookings are typically scheduled for 7:00 PM."
  },
  {
    question: "Do you offer custom bridal and groom makeup packages?",
    answer: "Yes! We specialize in premium bridal and groom makeovers. We offer comprehensive packages that include trials, skincare prep, hair styling, draping, and pre-wedding wellness therapies. Contact us or book a consultation for a customized package."
  },
  {
    question: "What hygiene protocols do you follow?",
    answer: "Hygiene is our utmost priority. We sanitize all tools and styling chairs after every client session, use single-use disposable towels and capes where possible, and enforce strict health checklists for all our stylists and therapists."
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Sneha Reddy",
    role: "Regular Client",
    stars: 5,
    text: "Absolutely wonderful experience! The hair spa was amazing, and the staff were very polite. Highly recommend Zen Bloom for a relaxing day of self-care."
  },
  {
    id: 2,
    name: "Priya K.",
    role: "Happy Bride",
    stars: 5,
    text: "Best bridal makeup I could have asked for. The team understood exactly what I wanted and made me feel so special on my big day. The makeup lasted all night!"
  },
  {
    id: 3,
    name: "Rahul M.",
    role: "Groom Package Client",
    stars: 5,
    text: "Great men's haircut and beard styling. The barbers are skilled and pay attention to detail. The facial before my wedding was also top-notch. Will be back."
  }
];

export default function Home({ setCurrentPage, onOpenBooking }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <div className="home-page page-transition">
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: "url('/images/zen_bloom_hero.jpg')" }}>
        <div className="hero-image-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content-box animate-slide-up">
            <span className="hero-tagline">
              <Sparkles size={14} className="icon-gold" />
              <span>Sanctuary of Wellness &amp; Beauty</span>
            </span>
            <h1 className="hero-title">
              Unveil Your <br />
              <span className="text-serif-italic">Natural Radiance</span>
            </h1>
            <p className="hero-description">
              Step into Zen Bloom, Peerzadiguda's premier destination for luxury hair care, revitalizing spa massage therapies, advanced skincare, and flawless bridal makeovers.
            </p>
            <div className="hero-actions">
              <button onClick={onOpenBooking} className="btn btn-gold">
                <Calendar size={16} />
                <span>Book Session</span>
              </button>
              <button onClick={() => setCurrentPage('services')} className="btn btn-white">
                <Compass size={16} />
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY / EXPERIENCE */}
      <section className="section experience-section">
        <div className="container experience-container">
          <div className="experience-visuals">
            <div className="experience-img-wrapper">
              <div className="experience-bg-box"></div>
              <img src="/images/zen_bloom_massage.jpg" alt="Zen Bloom Spa Experience" className="experience-img animate-fade-in" />
              <div className="experience-badge glass">
                <span className="badge-number">25</span>
                <span className="badge-text">Years of<br />Expertise</span>
              </div>
            </div>
          </div>
          <div className="experience-text-content">
            <span className="section-subtitle">About Our Spa</span>
            <h2 className="experience-heading">A Haven of Pure Relaxation &amp; Artistry</h2>
            <p className="experience-desc-1">
              At Zen Bloom, we believe that self-care is not a luxury, but a necessity. Our boutique beauty bar and spa is designed to offer a tranquil escape from the daily hustle.
            </p>
            <p className="experience-desc-2">
              Every haircut, facial, and massage is customized to your unique preferences. We pair cutting-edge styling methodologies with ancient healing wellness therapies to deliver an unparalleled experience.
            </p>

            {/* Checkmarks list */}
            <div className="experience-checks-grid">
              <div className="check-item">
                <div className="check-icon-circle"><Check size={16} /></div>
                <div>
                  <h4>Certified Elite Stylists</h4>
                  <p>Trained in top global academies.</p>
                </div>
              </div>
              <div className="check-item">
                <div className="check-icon-circle"><Check size={16} /></div>
                <div>
                  <h4>100% Organic Extracts</h4>
                  <p>Nourishing oils &amp; premium elements.</p>
                </div>
              </div>
              <div className="check-item">
                <div className="check-icon-circle"><Check size={16} /></div>
                <div>
                  <h4>Medical-Grade Hygiene</h4>
                  <p>Complete sanitization checks daily.</p>
                </div>
              </div>
              <div className="check-item">
                <div className="check-icon-circle"><Check size={16} /></div>
                <div>
                  <h4>Affordable Luxury Packages</h4>
                  <p>Premium care at local accessible rates.</p>
                </div>
              </div>
            </div>

            <button onClick={() => setCurrentPage('about')} className="btn btn-primary experience-cta">
              <span>Read Our Story</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. QUICK SERVICE HIGHLIGHTS */}
      <section className="section section-accent services-highlight">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Premium Treatments</span>
            <h2 className="section-title">Our Core Specialties</h2>
            <p>Indulge in a curated collection of wellness treatments designed to restore balance and enhance your styling aesthetics.</p>
          </div>

          <div className="services-highlight-grid">
            {/* Card 1 */}
            <div className="highlight-card">
              <div className="card-image-box">
                <img src="/images/zen_bloom_hair.jpg" alt="Hair Styling" />
                <div className="card-badge">Salon</div>
              </div>
              <div className="card-body">
                <h3>Hair Crafting &amp; Botox</h3>
                <p>From advanced precision cuts and global highlights to restorative keratin smoothing and hair Botox treatments.</p>
                <div className="card-footer">
                  <span className="price-tag">From ₹499</span>
                  <button onClick={() => setCurrentPage('services')} className="card-link-btn">
                    <span>View Menu</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="highlight-card">
              <div className="card-image-box">
                <img src="/images/zen_bloom_facial.jpg" alt="Facial Skincare" />
                <div className="card-badge">Skincare</div>
              </div>
              <div className="card-body">
                <h3>Facial Treatments</h3>
                <p>Revitalize skin cells with basic, premium, and advanced facials that deep clean, hydrate, and restore a youthful glow.</p>
                <div className="card-footer">
                  <span className="price-tag">From ₹800</span>
                  <button onClick={() => setCurrentPage('services')} className="card-link-btn">
                    <span>View Menu</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="highlight-card">
              <div className="card-image-box">
                <img src="/images/zen_bloom_bridal.jpg" alt="Bridal Makeup" />
                <div className="card-badge">Makeover</div>
              </div>
              <div className="card-body">
                <h3>Bridal &amp; Party Makeup</h3>
                <p>High-definition and airbrush makeup crafted by wedding professionals. Custom styles for reception, sangeet, and events.</p>
                <div className="card-footer">
                  <span className="price-tag">Custom Packages</span>
                  <button onClick={() => setCurrentPage('services')} className="card-link-btn">
                    <span>View Menu</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="highlight-card">
              <div className="card-image-box">
                <img src="/images/zen_bloom_massage_session.jpg" alt="Massage therapy" />
                <div className="card-badge">Therapy</div>
              </div>
              <div className="card-body">
                <h3>Spa &amp; Body Massages</h3>
                <p>Restore mental harmony and release physical muscle tension with therapeutic Swedish, deep tissue, and signature jacuzzi massages.</p>
                <div className="card-footer">
                  <span className="price-tag">From ₹1200</span>
                  <button onClick={() => setCurrentPage('services')} className="card-link-btn">
                    <span>View Menu</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS CAROUSEL */}
      <section className="section reviews-section section-sage">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle text-gold">Testimonials</span>
            <h2 className="section-title text-white">Loved By Our Clients</h2>
          </div>

          <div className="reviews-carousel-wrapper">
            <div className="review-slide glass">
              <div className="review-stars">
                {Array.from({ length: REVIEWS_DATA[activeReviewIndex].stars }).map((_, i) => (
                  <Star key={i} size={16} fill="hsl(var(--color-gold))" color="hsl(var(--color-gold))" />
                ))}
              </div>
              <p className="review-quote">"{REVIEWS_DATA[activeReviewIndex].text}"</p>
              <div className="review-client-meta">
                <h4 className="client-name">{REVIEWS_DATA[activeReviewIndex].name}</h4>
                <p className="client-role">{REVIEWS_DATA[activeReviewIndex].role}</p>
              </div>
            </div>

            <div className="carousel-nav-buttons">
              <button onClick={prevReview} className="carousel-nav-btn" aria-label="Previous review">←</button>
              <span className="carousel-indicator">{activeReviewIndex + 1} / {REVIEWS_DATA.length}</span>
              <button onClick={nextReview} className="carousel-nav-btn" aria-label="Next review">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      <section className="section faqs-section">
        <div className="container faqs-container">
          <div className="faqs-intro-column">
            <span className="section-subtitle">Common Inquiries</span>
            <h2>Have Questions About Our Services?</h2>
            <p>We believe in absolute transparency. Here are quick answers to the questions we receive most frequently from our visitors.</p>
            <div className="faq-illustration-box">
              <div className="info-badge">
                <ShieldCheck size={28} className="icon-gold" />
                <div>
                  <h4>100% Secure Bookings</h4>
                  <p>Quick booking straight to our business phone.</p>
                </div>
              </div>
              <div className="info-badge">
                <Heart size={28} className="icon-gold" />
                <div>
                  <h4>Satisfying Wellness Care</h4>
                  <p>Your comfort and happiness is our priority.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faqs-accordion-column">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className={`faq-accordion-item ${activeFaq === index ? 'open' : ''}`}>
                <button onClick={() => toggleFaq(index)} className="faq-question-trigger">
                  <span>{faq.question}</span>
                  <ChevronDown size={18} className="faq-arrow-icon" />
                </button>
                <div className="faq-answer-pane">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="cta-banner" style={{ backgroundImage: "url('/images/zen_bloom_massage.jpg')" }}>
        <div className="cta-overlay"></div>
        <div className="container cta-container animate-fade-in">
          <h2 className="cta-title">Ready to Experience True Serenity?</h2>
          <p className="cta-text">Book your luxury hair, facial, or relaxing massage today. Slots fill up quickly, especially on weekends.</p>
          <button onClick={onOpenBooking} className="btn btn-gold btn-lg">
            <Calendar size={18} />
            <span>Book Your Appointment Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}
