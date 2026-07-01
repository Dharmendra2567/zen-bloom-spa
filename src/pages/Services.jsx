import React, { useState } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import './Services.css';

const SERVICES_MENU = {
  'Hair Care': [
    {
      name: "Women's Precision Haircut",
      price: "₹599",
      desc: "Includes consulting, conditioning wash, custom hair mask, precision cut, blow-dry, and professional styling."
    },
    {
      name: "Men's Designer Cut & Groom",
      price: "₹349",
      desc: "Precision barber cut, scalp massage, beard detailing, and conditioning wash."
    },
    {
      name: "Premium Hair Spa & Rejuvenation",
      price: "₹1,199",
      desc: "Deep steam treatment, botanical scalp massage, nourishing mask, and serum infusion to combat dryness."
    },
    {
      name: "Keratin Smoothing Infusion",
      price: "₹3,999+",
      desc: "Rich protein therapy to eliminate frizz, restore moisture, and deliver glass-like shine (lasting up to 4 months)."
    },
    {
      name: "Advanced Hair Botox",
      price: "₹4,999+",
      desc: "Premium deep conditioning treatment that reconstructs damaged fibers, hydrates deeply, and returns natural bounce."
    },
    {
      name: "Global Hair Color & Styling",
      price: "₹2,499+",
      desc: "Ammonia-free luxury color mapping, including hair wash, treatment mask, and blowout."
    },
    {
      name: "Balayage / Ombre Highlights",
      price: "₹3,499+",
      desc: "Custom free-hand handpainted highlights to create natural sun-kissed dimensions."
    }
  ],
  'Facials & Skincare': [
    {
      name: "Essential Glow Cleansing Facial",
      price: "₹799",
      desc: "Deep pore scrubbing, steam extraction, herbal mask, and facial massage for instant skin rejuvenation."
    },
    {
      name: "Zen Brightening Fruit Facial",
      price: "₹1,299",
      desc: "Infused with organic botanical extracts and antioxidants to target pigmentation and reveal an even skin tone."
    },
    {
      name: "HydraGlow Advanced Facial",
      price: "₹2,499",
      desc: "Multi-step vacuum technology that cleanses, exfoliates, extracts impurities, and hydrates with custom serums."
    },
    {
      name: "Gold Radiance Luxury Facial",
      price: "₹1,899",
      desc: "Premium anti-aging facial utilizing colloidal gold and collagen masks to tighten skin and improve elasticity."
    },
    {
      name: "D-Tan Skin Clarifying Pack",
      price: "₹499",
      desc: "Active tan removal paste with lactic acid and milk extracts, leaving skin cooled and brightened."
    }
  ],
  'Bridal & Makeup': [
    {
      name: "Royal HD Bridal Makeover",
      price: "₹11,999",
      desc: "Flawless HD makeup, advanced bridal hairstyling, accessory setting, saree/outfit draping, and pre-wedding trial."
    },
    {
      name: "Bridal Airbrush Masterpiece",
      price: "₹15,999",
      desc: "Premium silicone-based airbrush application for a water-resistant, ultra-lightweight, 16-hour camera-ready finish."
    },
    {
      name: "Saphire Party / Engagement Makeup",
      price: "₹3,499",
      desc: "Professional makeup, soft blow-dry styling, and draping for bridesmaids, sangeet, or corporate celebrations."
    },
    {
      name: "Classic Groom Styling Package",
      price: "₹2,999",
      desc: "Anti-shine makeup prep, hair sculpting, charcoal face peel, and beard detailing for the groom's big day."
    }
  ],
  'Spa & Massages': [
    {
      name: "Zen Signature Swedish Massage",
      price: "₹1,499",
      desc: "60 minutes of long, gliding strokes using warm lavender-infused oils to stimulate circulation and ease tension."
    },
    {
      name: "Deep Tissue Muscle Therapy",
      price: "₹1,799",
      desc: "60 minutes focusing on deeper muscle layers and connective tissues to release chronic stiffness."
    },
    {
      name: "Luxury Jacuzzi Hydrotherapy Session",
      price: "₹2,499",
      desc: "Hot stone back massage followed by 30 minutes in our custom heated jacuzzi tub with botanical bubble salts."
    },
    {
      name: "Express Head & Shoulder Relief",
      price: "₹599",
      desc: "30-minute absolute tension release targeting scalp, neck, and shoulder acupressure coordinates."
    }
  ],
  'Grooming & Waxing': [
    {
      name: "Premium Rica Waxing (Full Arms & Legs)",
      price: "₹999",
      desc: "Gentle Italian lipo-soluble wax that reduces pain, prevents ingrown hair, and brightens skin tone."
    },
    {
      name: "Precision Eyebrow & Lip Threading",
      price: "₹119",
      desc: "Clean organic thread trimming to map and shape your eyebrows according to facial symmetry."
    },
    {
      name: "Full Face Organic Waxing/Threading",
      price: "₹599",
      desc: "Exfoliating peach-fuzz hair removal using sensitive organic wax, followed by a soothing aloe-vera gel rub."
    },
    {
      name: "Sleek Pedicure & Manicure Duo",
      price: "₹1,199",
      desc: "Warm salt water bath, organic scrub, cuticle trimming, nail shaping, massage rub, and lacquer application."
    }
  ]
};

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('Hair Care');

  return (
    <div className="services-page page-transition">
      {/* Hero Header */}
      <section className="services-hero" style={{ backgroundImage: "url('/images/zen_bloom_hair.jpg')" }}>
        <div className="services-hero-overlay"></div>
        <div className="container services-hero-container">
          <h1 className="services-hero-title animate-slide-up">Our Rituals &amp; Rates</h1>
          <p className="services-hero-subtitle animate-slide-up">A comprehensive menu of premium beauty &amp; wellness treatments</p>
        </div>
      </section>

      {/* Main menu selector */}
      <section className="section services-menu-section">
        <div className="container">
          {/* Tab selector */}
          <div className="services-category-tabs">
            {Object.keys(SERVICES_MENU).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`service-tab-button ${activeCategory === category ? 'active' : ''}`}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Rates List */}
          <div className="services-list-container animate-fade-in">
            <div className="services-list-header">
              <Sparkles size={16} className="icon-gold" />
              <h2>{activeCategory} Rate Card</h2>
              <Sparkles size={16} className="icon-gold" />
            </div>

            <div className="services-rates-list">
              {SERVICES_MENU[activeCategory].map((item, index) => (
                <div key={index} className="service-rate-item">
                  <div className="rate-title-row">
                    <h3 className="rate-name">{item.name}</h3>
                    <span className="rate-leader"></span>
                    <span className="rate-price">{item.price}</span>
                  </div>
                  <div className="rate-desc-row">
                    <p className="rate-desc">{item.desc}</p>
                    <button
                      onClick={() => onOpenBooking(item.name)}
                      className="btn-book-service"
                    >
                      <span>Book Service</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-booking-cta">
              <p>Looking for a custom package or pre-wedding party group discount?</p>
              <button onClick={() => onOpenBooking()} className="btn btn-gold">
                <Calendar size={16} />
                <span>Request Custom Package</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick notes */}
      <section className="section section-accent services-notes">
        <div className="container notes-container">
          <div className="note-card">
            <h3>Appointment Guidelines</h3>
            <p>Please arrive 10 minutes prior to your scheduled time to relax and fill out our custom wellness preferences form.</p>
          </div>
          <div className="note-card">
            <h3>Cancellation Policy</h3>
            <p>If you need to reschedule or cancel your session, please notify us at least 4 hours in advance via phone or WhatsApp.</p>
          </div>
          <div className="note-card">
            <h3>Custom Packages</h3>
            <p>All bridal makeovers require an initial consultation session to match skin tones, hair extensions, and outfits.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
