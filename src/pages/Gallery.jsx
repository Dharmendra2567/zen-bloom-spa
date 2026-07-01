import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Luxury Hair Botox Treatment",
    category: "Hair",
    img: "/images/zen_bloom_hair.jpg"
  },
  {
    id: 2,
    title: "Organic Essential Oil Spa Massage",
    category: "Spa",
    img: "/images/zen_bloom_massage.jpg"
  },
  {
    id: 3,
    title: "Bridal Airbrush Glow Finish",
    category: "Makeup",
    img: "/images/zen_bloom_bridal.jpg"
  },
  {
    id: 4,
    title: "HydraGlow Skin Exfoliation",
    category: "Skincare",
    img: "/images/zen_bloom_facial.jpg"
  },
  {
    id: 5,
    title: "Swedish Relaxing Back Massage",
    category: "Spa",
    img: "/images/zen_bloom_massage_session.jpg"
  },
  {
    id: 6,
    title: "Global Blonde Balayage Highlights",
    category: "Hair",
    img: "/images/hair_color_highlights.jpg"
  },
  {
    id: 7,
    title: "Elegant Party Updo & Braid Styling",
    category: "Hair",
    img: "/images/hair_styling_braid.jpg"
  },
  {
    id: 8,
    title: "Saphire Evening Glow Makeup",
    category: "Makeup",
    img: "/images/party_makeup_look.jpg"
  },
  {
    id: 9,
    title: "Aromatherapy Hot Stone Prep",
    category: "Spa",
    img: "/images/hot_stone_spa.jpg"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Hair', 'Skincare', 'Makeup', 'Spa'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (id) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  return (
    <div className="gallery-page page-transition">
      {/* Hero Header */}
      <section className="gallery-hero" style={{ backgroundImage: "url('/images/zen_bloom_massage_session.jpg')" }}>
        <div className="gallery-hero-overlay"></div>
        <div className="container gallery-hero-container">
          <h1 className="gallery-hero-title animate-slide-up">Our Lookbook &amp; Ambiance</h1>
          <p className="gallery-hero-subtitle animate-slide-up">A visual journey through our styling transformations and serene setups</p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="section gallery-grid-section">
        <div className="container">
          {/* Category Filter Bar */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-tab-button ${filter === cat ? 'active' : ''}`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="gallery-items-grid animate-fade-in">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => openLightbox(item.id)}
              >
                <div className="gallery-item-img-box">
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-item-hover-mask">
                    <ZoomIn size={32} className="zoom-icon" />
                  </div>
                </div>
                <div className="gallery-item-info">
                  <span className="item-cat-lbl">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          {/* Close Trigger */}
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={28} />
          </button>

          {/* Navigation */}
          <button className="lightbox-nav-btn prev-btn" onClick={showPrevImage} aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>
          
          <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_ITEMS[lightboxIndex].img}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="lightbox-active-img animate-fade-in"
            />
            <div className="lightbox-img-meta">
              <span className="lightbox-cat">{GALLERY_ITEMS[lightboxIndex].category}</span>
              <h2 className="lightbox-title">{GALLERY_ITEMS[lightboxIndex].title}</h2>
            </div>
          </div>

          <button className="lightbox-nav-btn next-btn" onClick={showNextImage} aria-label="Next image">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
