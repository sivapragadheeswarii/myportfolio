import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Terminal, Code2, Globe, Sparkles, Layers } from 'lucide-react';
import sdsTechImg from '../assets/projects/sds_tech.png';
import holyCoinsImg from '../assets/projects/holy_coins.png';
import realEstateImg from '../assets/projects/real_estate.png';

const CaseStudyRow = ({ number, title, subtitle, description, highlights, tags, github, live, image, isReversed, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className={`cs-row ${isReversed ? 'reversed' : ''}`}
  >
    {/* LEFT/RIGHT: Glass Browser Preview Window */}
    <div className="cs-media-col">
      <div className="cs-browser-frame">
        {/* macOS Control Bar */}
        <div className="cs-browser-header">
          <div className="cs-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="cs-address-bar">
            <Globe size={11} color="#C5A059" />
            <span>{live && live !== '#' ? live.replace('https://', '') : `localhost:3000/${title.toLowerCase().replace(/\s+/g, '-')}`}</span>
          </div>
        </div>

        {/* Screenshot Image Container */}
        <div className="cs-browser-viewport">
          <img src={image} alt={title} className="cs-browser-img" />
          <div className="cs-browser-vignette" />

          {/* Status Badge */}
          {live && live !== '#' && (
            <div className="cs-live-pill">
              <span className="cs-live-dot" />
              <span>LIVE SYSTEM</span>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* RIGHT/LEFT: Executive Editorial Content */}
    <div className="cs-info-col">
      {/* Number Watermark & Subtitle */}
      <div className="cs-meta-header">
        <span className="cs-big-num">{number}</span>
        <div className="cs-subtitle-badge">
          <Sparkles size={12} color="#C5A059" />
          <span>{subtitle}</span>
        </div>
      </div>

      {/* Main Title */}
      <h3 className="cs-item-title">{title}</h3>

      {/* Description */}
      <p className="cs-item-desc">{description}</p>

      {/* Engineering Highlights */}
      <div className="cs-highlights-grid">
        {highlights.map((h, i) => (
          <div key={i} className="cs-highlight-item">
            <CheckCircle2 size={14} color="#C5A059" />
            <span>{h}</span>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="cs-tech-strip">
        {tags.map((tag, i) => (
          <span key={i} className="cs-tech-pill">{tag}</span>
        ))}
      </div>

      {/* CTAs */}
      <div className="cs-btn-row">
        {live && live !== '#' && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="cs-btn-primary">
            <span>Explore Live Platform</span>
            <ArrowUpRight size={16} />
          </a>
        )}
        <a href={github} target="_blank" rel="noopener noreferrer" className="cs-btn-secondary">
          <Github size={15} />
          <span>Repository</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const caseStudies = [
    {
      number: "01",
      title: "SDS Technologies Corporate Platform",
      subtitle: "ENTERPRISE MERN ARCHITECTURE",
      description: "The flagship corporate web platform engineered for SDS Technologies. Built with a high-performance MERN stack, featuring an ultra-sleek luxury dark aesthetic, custom component architecture, and seamless client interaction flows.",
      highlights: ["Glassmorphic Design Tokens", "High-Throughput API Routes", "SEO & Performance Optimized"],
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/sivapragadheeswarii/sds",
      live: "https://sdstechzone.in/",
      image: sdsTechImg,
      isReversed: false
    },
    {
      number: "02",
      title: "Holy Coins Trading App & Bullion Exchange",
      subtitle: "FINTECH & CRYPTO TRADING PLATFORM",
      description: "A high-frequency digital trading and bullion exchange application. Engineered for real-time asset tracking, live candlestick chart analytics, instant buy/sell order execution, and secure wallet management.",
      highlights: ["Real-Time WebSocket Market Ticker", "Instant Order Book & Trading Engine", "Secure Multi-Asset Wallet Integration"],
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/sivapragadheeswarii/holy-coins",
      live: "#",
      image: holyCoinsImg,
      isReversed: true
    },
    {
      number: "03",
      title: "Luxury Real Estate Mobile Application",
      subtitle: "CROSS-PLATFORM MOBILE ECOSYSTEM",
      description: "A high-performance luxury real estate mobile application engineered with React Native and Expo. Features interactive property maps, instant filter queries, virtual tours, direct seller messaging, and seamless backend synchronization.",
      highlights: ["React Native Cross-Platform UI", "Interactive Geolocation & Map Filters", "Real-Time Seller Communication Pipeline"],
      tags: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/sivapragadheeswarii/realestate-mobile",
      live: "#",
      image: realEstateImg,
      isReversed: false
    }
  ];

  return (
    <section id="projects" className="cs-section section-padding">
      {/* Section Title Header */}
      <div className="cs-header">
        <motion.div
          className="cs-badge"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cs-badge-line" />
          <span>FEATURED PRODUCTION ARCHITECTURE</span>
        </motion.div>

        <motion.h2
          className="cs-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          CASE_<span className="gradient-text">STUDIES</span>
        </motion.h2>

        <motion.p
          className="cs-subtitle-desc"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          In-depth examination of production software systems engineered with modern MERN stack principles, clean code standards, and luxury visual refinement.
        </motion.p>
      </div>

      {/* Case Studies Showcase Stack */}
      <div className="cs-stack">
        {caseStudies.map((cs, idx) => (
          <CaseStudyRow key={idx} index={idx} {...cs} />
        ))}
      </div>

      <style>{`
        .cs-section {
          position: relative;
          background: #050505;
          overflow: hidden;
        }

        .cs-header {
          max-width: 760px;
          margin-bottom: 5rem;
        }

        .cs-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .cs-badge-line {
          width: 36px;
          height: 1.5px;
          background: var(--accent-gold);
        }

        .cs-badge span {
          font-family: 'Fira Code', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 3px;
          color: var(--accent-gold);
          text-transform: uppercase;
        }

        .cs-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.3rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
        }

        .cs-subtitle-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.8;
          font-weight: 300;
        }

        /* Showcase Stack */
        .cs-stack {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .cs-row {
          display: flex;
          align-items: center;
          gap: 4rem;
          background: rgba(12, 12, 16, 0.4);
          border: 1px solid rgba(197, 160, 89, 0.15);
          border-radius: 28px;
          padding: 3rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .cs-row:hover {
          border-color: rgba(197, 160, 89, 0.4);
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.85), 0 0 30px rgba(197, 160, 89, 0.08);
        }

        .cs-row.reversed {
          flex-direction: row-reverse;
        }

        /* Media Column */
        .cs-media-col {
          width: 52%;
          flex-shrink: 0;
        }

        .cs-browser-frame {
          border-radius: 16px;
          overflow: hidden;
          background: #0B0B0E;
          border: 1px solid rgba(197, 160, 89, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        }

        .cs-browser-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #101117;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cs-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .cs-address-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.5);
          padding: 4px 14px;
          border-radius: 6px;
          font-family: 'Fira Code', monospace;
          font-size: 0.64rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .cs-browser-viewport {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .cs-browser-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: brightness(0.98) contrast(1.04);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-row:hover .cs-browser-img {
          transform: scale(1.04);
        }

        .cs-browser-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 70%, rgba(5, 5, 5, 0.5) 100%);
          pointer-events: none;
        }

        .cs-live-pill {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(8, 8, 12, 0.88);
          border: 1px solid rgba(16, 185, 129, 0.35);
          backdrop-filter: blur(10px);
          font-family: 'Fira Code', monospace;
          font-size: 0.6rem;
          color: #10b981;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .cs-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: cs-pulse 2s infinite;
        }

        /* Info Column */
        .cs-info-col {
          width: 48%;
          display: flex;
          flex-direction: column;
        }

        .cs-meta-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 0.8rem;
        }

        .cs-big-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: rgba(197, 160, 89, 0.5);
          line-height: 1;
        }

        .cs-subtitle-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Fira Code', monospace;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: #C5A059;
          text-transform: uppercase;
        }

        .cs-item-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 2.2vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .cs-item-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 1.4rem;
        }

        .cs-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          margin-bottom: 1.4rem;
          background: rgba(197, 160, 89, 0.04);
          border: 1px solid rgba(197, 160, 89, 0.12);
          padding: 12px 16px;
          border-radius: 10px;
        }

        .cs-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .cs-tech-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 1.8rem;
        }

        .cs-tech-pill {
          font-family: 'Fira Code', monospace;
          font-size: 0.68rem;
          color: #F3E5AB;
          background: rgba(197, 160, 89, 0.08);
          border: 1px solid rgba(197, 160, 89, 0.2);
          padding: 4px 12px;
          border-radius: 6px;
        }

        .cs-btn-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(197,160,89,0.25), rgba(197,160,89,0.08));
          border: 1px solid var(--accent-gold);
          color: #ffffff;
          border-radius: 8px;
          font-family: 'Fira Code', monospace;
          font-size: 0.76rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(197, 160, 89, 0.15);
        }

        .cs-btn-primary:hover {
          background: var(--accent-gold);
          color: #050505;
          box-shadow: 0 0 25px rgba(197, 160, 89, 0.35);
          transform: translateY(-2px);
        }

        .cs-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          font-family: 'Fira Code', monospace;
          font-size: 0.76rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cs-btn-secondary:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          transform: translateY(-2px);
        }

        @media (max-width: 1080px) {
          .cs-row, .cs-row.reversed {
            flex-direction: column;
            padding: 2.2rem;
            gap: 2.5rem;
          }
          .cs-media-col, .cs-info-col {
            width: 100%;
          }
          .cs-browser-viewport {
            height: 250px;
          }
        }

        @media (max-width: 600px) {
          .cs-stack {
            gap: 2.5rem;
          }
          .cs-row, .cs-row.reversed {
            padding: 1.4rem 1.1rem !important;
            border-radius: 20px !important;
            gap: 1.5rem !important;
          }
          .cs-browser-viewport {
            height: 195px !important;
          }
          .cs-browser-header {
            padding: 8px 12px !important;
          }
          .cs-address-bar {
            padding: 3px 10px !important;
            font-size: 0.58rem !important;
          }
          .cs-item-title {
            font-size: 1.35rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.8rem !important;
          }
          .cs-item-desc {
            font-size: 0.85rem !important;
            line-height: 1.65 !important;
            margin-bottom: 1.2rem !important;
          }
          .cs-highlights-grid {
            padding: 10px 12px !important;
            gap: 6px !important;
            margin-bottom: 1.2rem !important;
          }
          .cs-highlight-item {
            font-size: 0.76rem !important;
          }
          .cs-tech-strip {
            gap: 6px !important;
            margin-bottom: 1.4rem !important;
          }
          .cs-tech-pill {
            font-size: 0.62rem !important;
            padding: 3px 10px !important;
          }
          .cs-btn-row {
            flex-direction: column !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .cs-btn-primary, .cs-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
            padding: 12px 16px !important;
            font-size: 0.78rem !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
