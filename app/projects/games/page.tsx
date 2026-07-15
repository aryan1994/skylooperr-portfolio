"use client"

import Link from "next/link"

export default function GamesCaseStudy() {
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
          <h1>Game Development</h1>
          <p className="case-study-subtitle">My Game Development Journey</p>
          <img src="https://images.unsplash.com/photo-1538481143235-5d630027f67e?w=1200&q=80" alt="Game Development" className="hero-image" />
        </section>

        <section className="quick-stats">
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-name">Completed Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-name">Prototypes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-name">Game Mechanics</div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>The Journey</h2>
          <p>
            Game development was my entry into programming and product engineering. Through Unity and C#, I explored complex systems like physics
            engines, UI frameworks, gameplay mechanics, and rapid prototyping—skills that directly translated to my transition into product
            development.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Learning Path</h2>
          <div className="roadmap-timeline">
            <div className="roadmap-item">
              <div className="roadmap-marker">Game Dev Foundation</div>
              <div className="roadmap-content">
                <h4>Physics & Mechanics</h4>
                <p>Explored Rigidbody physics, colliders, raycasting, and collision detection systems</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">Gameplay Systems</div>
              <div className="roadmap-content">
                <h4>AI & Logic</h4>
                <p>Built AI pathfinding, state machines, and complex gameplay logic</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">UI/UX Design</div>
              <div className="roadmap-content">
                <h4>User Interface</h4>
                <p>Created responsive menus, HUDs, and player feedback systems</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-marker">Problem Solving</div>
              <div className="roadmap-content">
                <h4>Debugging & Optimization</h4>
                <p>Optimized performance, fixed bugs, and improved game feel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Tech Stack</h2>
          <div className="tech-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="tech-category">
              <h4>Engine & Language</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Unity 2021+</li>
                <li>C# Programming</li>
                <li>Visual Studio</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Development</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Asset Store</li>
                <li>3D Modeling</li>
                <li>Animation Tools</li>
              </ul>
            </div>
            <div className="tech-category">
              <h4>Services</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>PlayFab Backend</li>
                <li>Cloud Saves</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Evolution to Product Engineering</h2>
          <p>
            The skills I gained through game development—problem-solving, systems thinking, rapid prototyping, and user-centered design—became the
            foundation for my transition into product engineering and startup building. Game dev taught me how to build complex, interactive systems
            that delight users.
          </p>
        </section>

        <section className="case-study-cta">
          <h2>Continue exploring</h2>
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

        .roadmap-timeline {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 30px;
        }

        .roadmap-item {
          display: grid;
          grid-template-columns: 200px 1fr;
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

          .roadmap-item {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
