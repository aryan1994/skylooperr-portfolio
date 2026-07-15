"use client"

import Link from "next/link"

export default function PortfolioCaseStudy() {
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
          <h1>Personal Portfolio</h1>
          <p className="case-study-subtitle">Crafting My Digital Identity</p>
          <img src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&q=80" alt="Portfolio" className="hero-image" />
        </section>

        <section className="quick-stats">
          <div className="stat-card">
            <div className="stat-number">98/100</div>
            <div className="stat-name">Performance</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100/100</div>
            <div className="stat-name">Accessibility</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100/100</div>
            <div className="stat-name">SEO Score</div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Project Overview</h2>
          <p>
            This personal portfolio website is designed to tell my story as a founder, engineer, and designer. It combines premium animations,
            storytelling, and modern design to create a memorable experience for recruiters, founders, and investors.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Design & Animation</h2>
          <ul className="features-list">
            <li>Smooth scroll animations with GSAP & Framer Motion</li>
            <li>Lenis smooth scrolling for optimal UX</li>
            <li>Retro brutalist design with modern tech stack</li>
            <li>Pixel-perfect responsive design</li>
            <li>CRT scanline visual effects</li>
            <li>Interactive project showcases</li>
            <li>Performance-optimized images</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Tech Stack</h2>
          <div className="tech-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="tech-category">
              <h4>Frontend</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Next.js 16</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Animation</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Framer Motion</li>
                <li>GSAP</li>
                <li>Lenis</li>
                <li>Custom CSS</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Performance</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Next.js Optimized</li>
                <li>Image Optimization</li>
                <li>Code Splitting</li>
                <li>SEO Ready</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Key Metrics</h2>
          <div className="impact-items">
            <div className="impact-item">
              <h4>Performance: 98/100</h4>
              <p>Optimized for speed with lazy loading, image compression, and efficient code splitting.</p>
            </div>
            <div className="impact-item">
              <h4>Accessibility: 100/100</h4>
              <p>WCAG 2.1 compliant with proper semantic HTML, ARIA labels, and keyboard navigation.</p>
            </div>
            <div className="impact-item">
              <h4>SEO: 100/100</h4>
              <p>Fully optimized for search engines with structured data, meta tags, and sitemaps.</p>
            </div>
            <div className="impact-item">
              <h4>Mobile First</h4>
              <p>Responsive design works flawlessly on all devices from mobile to desktop.</p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <h2>Explore the portfolio</h2>
          <div className="cta-buttons">
            <a href="/" className="btn-retro">
              VISIT PORTFOLIO
            </a>
            <a href="/#work" className="btn-retro" style={{ background: "transparent", color: "var(--accent-retro)", boxShadow: "2px 2px 0px var(--accent-retro)" }}>
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

        .impact-items {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .impact-item {
          background: var(--surface);
          border: 2px solid var(--border-color);
          padding: 30px;
        }

        .impact-item h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--accent-retro);
          text-transform: uppercase;
        }

        .impact-item p {
          font-size: 0.95rem;
          color: var(--text-secondary);
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

          .tech-grid,
          .impact-items {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
