"use client"

import Link from "next/link"

export default function HomiYoCaseStudy() {
  return (
    <div className="case-study-page">
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className="logo">
            ARYAN KUMAR
          </Link>
          <nav className="nav-links">
            <Link href="/#work">BACK</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <section className="case-study-hero">
          <h1>Homiyo.Decors</h1>
          <p className="case-study-subtitle">Building a Premium Home Décor Brand</p>
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="Homiyo Decors" className="hero-image" />
        </section>

        <section className="quick-stats">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-name">Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-name">Countries</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+45%</div>
            <div className="stat-name">Conversion</div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Project Overview</h2>
          <p>
            Homiyo.Decors is a premium home décor platform where I designed the complete user experience, visual branding, and customer journey. From
            product curation to checkout optimization, every detail was crafted to maximize conversion and customer satisfaction.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Key Achievements</h2>
          <ul className="features-list">
            <li>Complete Brand Identity Design</li>
            <li>Responsive E-Commerce Storefront</li>
            <li>Product Page Optimization</li>
            <li>Marketing Creative Suite</li>
            <li>Customer Journey Mapping</li>
            <li>Conversion Rate Optimization (+45%)</li>
            <li>Mobile-First Design</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Design Process</h2>
          <div className="tech-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="tech-category">
              <h4>Research</h4>
              <p>Market analysis, competitor research, and customer insights to inform design decisions.</p>
            </div>
            <div className="tech-category">
              <h4>Design</h4>
              <p>Wireframing, visual design, and prototyping using Figma with comprehensive design system.</p>
            </div>
            <div className="tech-category">
              <h4>Development</h4>
              <p>Built on Shopify with custom Liquid templates and TailwindCSS for optimal performance.</p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <h2>Explore the work</h2>
          <div className="cta-buttons">
            <a href="/#work" className="btn-retro">
              BACK TO PROJECTS
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        .case-study-page {
          background: var(--bg-color);
          color: var(--text-primary);
          min-height: 100vh;
        }

        .case-study-hero {
          padding: 100px 0;
          text-align: center;
        }

        .case-study-hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          font-family: "Space Mono", monospace;
          text-transform: uppercase;
        }

        .case-study-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-image {
          width: 100%;
          max-width: 900px;
          height: auto;
          border: 2px solid var(--border-color);
          box-shadow: 8px 8px 0px var(--accent-retro);
          filter: grayscale(100%) contrast(120%);
        }

        .quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 80px 0;
          padding: 60px 30px;
          background: var(--surface);
          border: 2px solid var(--border-color);
        }

        .stat-card {
          text-align: center;
          border-right: 1px solid var(--border-color);
        }

        .stat-card:last-child {
          border-right: none;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent-retro);
          font-family: "Space Mono", monospace;
          margin-bottom: 10px;
        }

        .stat-name {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          font-weight: 600;
        }

        .case-study-section {
          padding: 80px 0;
          border-bottom: 2px solid var(--border-color);
        }

        .case-study-section h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 30px;
          font-family: "Space Mono", monospace;
          text-transform: uppercase;
        }

        .case-study-section p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .features-list {
          list-style: none;
          padding-left: 0;
          display: grid;
          gap: 12px;
        }

        .features-list li {
          padding-left: 30px;
          position: relative;
          color: var(--text-secondary);
        }

        .features-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent-retro);
          font-weight: bold;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .tech-category {
          background: var(--surface);
          border: 2px solid var(--border-color);
          padding: 30px;
        }

        .tech-category h4 {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 15px;
          color: var(--accent-retro);
        }

        .tech-category p {
          font-size: 0.95rem;
          margin: 0;
        }

        .case-study-cta {
          padding: 80px 0;
          text-align: center;
        }

        .case-study-cta h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 40px;
          font-family: "Space Mono", monospace;
          text-transform: uppercase;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .quick-stats {
            grid-template-columns: 1fr;
          }

          .stat-card {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 20px;
          }

          .stat-card:last-child {
            border-bottom: none;
          }

          .case-study-hero h1 {
            font-size: 2.5rem;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
