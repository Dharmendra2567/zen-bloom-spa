import React from 'react';
import { ShieldCheck, Award, Heart, Leaf, Smile, Sparkles } from 'lucide-react';
import './About.css';

export default function About({ onOpenBooking }) {
  return (
    <div className="about-page page-transition">
      {/* Page Header */}
      <section className="about-hero" style={{ backgroundImage: "url('/images/zen_bloom_massage.jpg')" }}>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-container">
          <h1 className="about-hero-title animate-slide-up">Our Story &amp; Philosophy</h1>
          <p className="about-hero-subtitle animate-slide-up">Discover the luxury wellness experience behind Zen Bloom</p>
        </div>
      </section>

      {/* Intro block */}
      <section className="section about-intro">
        <div className="container intro-container">
          <div className="intro-text">
            <span className="section-subtitle">Welcome to Zen Bloom</span>
            <h2>Where Beauty Meets Tranquility</h2>
            <p className="lead-text">
              At Zen Bloom Spa in Peerzadiguda, we believe that true beauty radiates from within, enhanced by expert care and premium products.
            </p>
            <p>
              Whether you're looking for a refreshing haircut, a revitalizing facial, a soothing therapeutic massage, or flawless bridal makeup, our highly trained professionals are here to provide a personalized, luxurious experience tailored just for you.
            </p>
            <p>
              Founded with the vision of making premium beauty care accessible and relaxing, we combine state-of-the-art salon techniques with therapeutic spa rituals. Every session is designed not just to style, but to rejuvenate your mind, body, and spirit.
            </p>
            <div className="intro-stats">
              <div className="stat-box">
                <span className="stat-num">25+</span>
                <span className="stat-lbl">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10k+</span>
                <span className="stat-lbl">Happy Clients</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Sanitized Tools</span>
              </div>
            </div>
          </div>
          <div className="intro-image-pane">
            <div className="about-collage">
              <div className="collage-box collage-box-1">
                <img src="/images/zen_bloom_hair.jpg" alt="Hair Styling Setup" />
              </div>
              <div className="collage-box collage-box-2">
                <img src="/images/zen_bloom_facial.jpg" alt="Facial Skincare Treatment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="section section-accent why-us-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Standards</span>
            <h2 className="section-title">Why Choose Zen Bloom</h2>
            <p>We hold ourselves to the highest standards of safety, quality, and personalized care in the beauty industry.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <Award size={24} />
              </div>
              <h3>Expert Stylists &amp; Artists</h3>
              <p>Our team members undergo rigorous, advanced training to stay ahead of the latest styles, coloring techniques, and massage protocols.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Leaf size={24} />
              </div>
              <h3>Premium Organic Extracts</h3>
              <p>We source only high-end, dermatologist-tested haircare and organic oils that nourish your body without harsh chemicals.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Absolute Hygiene &amp; Safety</h3>
              <p>From single-use capes to medical-grade sanitization of shear sets and massage beds, your health is our priority.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Smile size={24} />
              </div>
              <h3>Relaxing Botanical Ambiance</h3>
              <p>Soft lighting, soothing acoustics, and aromatherapy diffusers set the stage for deep muscle and mental relaxation.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Sparkles size={24} />
              </div>
              <h3>Personalized Consultations</h3>
              <p>We never apply a one-size-fits-all approach. We analyze your hair type, skin profile, and muscle stresses before recommending treatments.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Heart size={24} />
              </div>
              <h3>Affordable Luxury Rates</h3>
              <p>Enjoy premium wellness treatments and salon makeovers designed with highly accessible and transparent pricing structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">The Artisans</span>
            <h2 className="section-title">Meet Our Specialists</h2>
            <p>Our friendly, certified professionals are dedicated to making your experience relaxing and transformational.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="/images/stylist_1.jpg" alt="Rhea Sen" />
              </div>
              <div className="team-info">
                <h3>Rhea Sen</h3>
                <span className="team-role">Master Hair Stylist &amp; Colorist</span>
                <p>Specializes in modern global highlights, precision cuts, and advanced hair botox treatments.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="/images/stylist_2.jpg" alt="Asha Hegde" />
              </div>
              <div className="team-info">
                <h3>Asha Hegde</h3>
                <span className="team-role">Lead Bridal Makeup Artist</span>
                <p>Crafts elegant HD bridal and party makeups customized to natural contours and lighting conditions.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="/images/stylist_3.jpg" alt="Arjun Sharma" />
              </div>
              <div className="team-info">
                <h3>Arjun Sharma</h3>
                <span className="team-role">Lead Therapeutic Therapist</span>
                <p>Expert in deep tissue release, Swedish massage, and our signature hot oil and jacuzzi therapies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="about-cta section-sage">
        <div className="container about-cta-container">
          <h2>Experience Luxury Wellness Today</h2>
          <p>Book your personalized consultation or hair &amp; beauty session. Walk-ins based on availability.</p>
          <button onClick={onOpenBooking} className="btn btn-gold">
            <span>Book Appointment</span>
          </button>
        </div>
      </section>
    </div>
  );
}
