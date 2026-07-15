"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HydroxFlowCaseStudy() {
  return (
    <div className="case-study-page">
      {/* Header */}
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
        {/* Hero Banner */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="case-study-hero">
          <h1>HydroxFlow</h1>
          <p className="case-study-subtitle">Building the Digital Infrastructure for India's Water Logistics</p>
          <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db40?w=1200&q=80" alt="HydroxFlow" className="hero-image" />
        </motion.section>

        {/* Quick Stats */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="quick-stats">
          <div className="stat-card">
            <div className="stat-number">39+</div>
            <div className="stat-name">Early Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹9K+</div>
            <div className="stat-name">Revenue Generated</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-name">Award Wins</div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <section className="case-study-section">
          <h2>The Problem</h2>
          <p>
            India's water tanker industry is fragmented, inefficient, and largely offline. Over 95% of transactions still rely on phone calls to
            unorganized brokers. Customers face opaque pricing, unreliable delivery, and zero transparency. Operators manage bookings manually,
            have no visibility into their business, and struggle with customer acquisition.
          </p>
          <p>In cities without reliable municipal water supply, residents and businesses depend entirely on tanker deliveries—yet there's no modern
            infrastructure to streamline this critical service.</p>
        </section>

        {/* Opportunity Section */}
        <section className="case-study-section">
          <h2>The Market Opportunity</h2>
          <p>
            India has 7,930+ cities, with only 40% having reliable water infrastructure. Water tanker logistics is a $10B+ annual market with
            zero digital penetration. Every city with population over 100,000 needs water delivery infrastructure—representing massive TAM.
          </p>
        </section>

        {/* Solution Section */}
        <section className="case-study-section">
          <h2>The Solution: HydroxFlow</h2>
          <p>
            HydroxFlow is a B2B2C platform that digitizes water logistics. Customers can book tankers in seconds with transparent pricing, real-time
            tracking, and digital payments. Tanker operators get a modern dashboard to manage bookings, pricing, customer relationships, and
            operations efficiently.
          </p>

          <h3>Key Features</h3>
          <ul className="features-list">
            <li>Online Booking System with instant confirmation</li>
            <li>Real-time GPS Tracking</li>
            <li>Digital Payment Integration</li>
            <li>Operator Dashboard for fleet management</li>
            <li>Vendor Management Suite</li>
            <li>Flexible Subscription Plans</li>
            <li>Transparent, Dynamic Pricing</li>
          </ul>
        </section>

        {/* Tech Stack Section */}
        <section className="case-study-section">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <ul>
                <li>Supabase (PostgreSQL)</li>
                <li>Real-time Database</li>
                <li>Authentication</li>
                <li>Edge Functions</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Design & Tools</h4>
              <ul>
                <li>Figma (Design System)</li>
                <li>Framer Motion (Animations)</li>
                <li>Stripe (Payments)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="case-study-section">
          <h2>Challenges & Solutions</h2>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h4>Customer Acquisition</h4>
              <p>Building trust in an untapped market where most transactions are offline and relationship-based.</p>
              <span className="solution-label">Approach:</span>
              <p>Founder-led validation, direct customer outreach, and partnership with local water suppliers.</p>
            </div>
            <div className="challenge-card">
              <h4>Real-time Logistics</h4>
              <p>Coordinating tanker dispatch, routing, and delivery in real-time across scattered locations.</p>
              <span className="solution-label">Approach:</span>
              <p>GPS tracking, driver app, and smart dispatch algorithm for optimal routing.</p>
            </div>
            <div className="challenge-card">
              <h4>Operator Adoption</h4>
              <p>Convincing informal operators to adopt technology when they've been successful offline.</p>
              <span className="solution-label">Approach:</span>
              <p>Clear ROI demonstration, simplified UX, and revenue-sharing model.</p>
            </div>
            <div className="challenge-card">
              <h4>Payment & Compliance</h4>
              <p>Handling payments, taxes, and regulatory compliance in fragmented local markets.</p>
              <span className="solution-label">Approach:</span>
              <p>Stripe integration, automated invoicing, and compliance automation.</p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="case-study-section">
          <h2>Product Roadmap</h2>
          <div className="roadmap-timeline">
            <div className="roadmap-item">
              <div className="roadmap-marker">Q1 2025</div>
              <div className="roadmap-content">
                <h4>Driver App</h4>
                <p>Dedicated mobile app for tanker operators with real-time notifications and navigation</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">Q2 2025</div>
              <div className="roadmap-content">
                <h4>AI Demand Forecasting</h4>
                <p>Predict water demand patterns and optimize supply across regions</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">Q3 2025</div>
              <div className="roadmap-content">
                <h4>Fleet Management</h4>
                <p>Advanced fleet optimization, maintenance tracking, and fuel management</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">Q4 2025</div>
              <div className="roadmap-content">
                <h4>IoT Water Monitoring</h4>
                <p>Smart sensors for water quality and quantity monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="case-study-section">
          <h2>Current Traction & Impact</h2>
          <div className="impact-items">
            <div className="impact-item">
              <h4>39 Early Users</h4>
              <p>Active testing in beta with real customers providing feedback and driving iterations</p>
            </div>
            <div className="impact-item">
              <h4>₹9,000+ Revenue</h4>
              <p>Generated during testing phase—proving willingness to pay and market validation</p>
            </div>
            <div className="impact-item">
              <h4>National Recognition</h4>
              <p>Winner of PitchPulse Startup Competition | Finalist at IIT Delhi EDC Blueprint | Finalist at IIT Bombay Tatva</p>
            </div>
            <div className="impact-item">
              <h4>Founder-Led Execution</h4>
              <p>Direct customer validation, product iteration, and seed fundraising preparation</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="case-study-cta">
          <h2>Ready to explore more?</h2>
          <div className="cta-buttons">
            <a href="https://preview--hydroxflow.lovable.app" target="_blank" rel="noopener noreferrer" className="btn-retro">
              VISIT HYDROXFLOW
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

        .case-study-section h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 30px 0 15px;
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

        .tech-category ul {
          list-style: none;
          padding: 0;
        }

        .tech-category li {
          padding: 8px 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          border-bottom: 1px solid var(--border-color);
        }

        .tech-category li:last-child {
          border-bottom: none;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 30px;
        }

        .challenge-card {
          background: var(--surface);
          border: 2px solid var(--border-color);
          padding: 30px;
        }

        .challenge-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .challenge-card p {
          margin-bottom: 15px;
          font-size: 0.95rem;
        }

        .solution-label {
          font-weight: 700;
          color: var(--accent-retro);
          display: block;
          margin: 10px 0 5px;
        }

        .roadmap-timeline {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 30px;
        }

        .roadmap-item {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 30px;
          padding: 20px 0;
          border-left: 3px solid var(--accent-retro);
          padding-left: 30px;
        }

        .roadmap-marker {
          font-weight: 700;
          color: var(--accent-retro);
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .roadmap-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .roadmap-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
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

          .stat-number {
            font-size: 2rem;
          }

          .tech-grid,
          .challenges-grid,
          .impact-items {
            grid-template-columns: 1fr;
          }

          .case-study-hero h1 {
            font-size: 2.5rem;
          }

          .case-study-section h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  )
}
