"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Update the system clock
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
          entry.target.style.animationDelay = `${Array.from(entry.target.parentChildren || []).indexOf(entry.target) * 100}ms`
        }
      })
    }, observerOptions)

    // Observe all text elements
    document.querySelectorAll("p, h2, h3, .stat-item, .project-card").forEach((el) => {
      observer.observe(el)
    })

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logo">ARYAN KUMAR</div>
          <nav className="nav-links">
            <a href="#work">PROJECTS</a>
            <a href="#lab">SKILLS</a>
            <a href="#archive">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <div className="system-status">SYS_UP: 24:12:05:08 | CPU: 12%</div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent-retro)", marginBottom: "10px" }}>{"[ INITIALIZING PROTOCOL... ]"}</p>
            <h1>
              Developer <span>@skylooperr</span>
            </h1>
            <p>
              Building pixel-perfect experiences with code. Crafting digital products that solve real problems. Retro vibes, modern tech.
            </p>
            <a href="#work" className="btn-retro">
              EXPLORE PROJECTS
            </a>
          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>PROFILE.JPG</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000258993-removebg-preview-removebg-preview-PdjlM748o7Ejyy64U50gNsvB0JZHVk.png"
              alt="Aryan Kumar Portrait"
              className="hero-image"
              style={{ filter: "grayscale(100%) contrast(120%) drop-shadow(0 0 10px rgba(255, 77, 0, 0.3))" }}
            />
          </div>
        </section>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">10+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">50+</div>
            <div className="stat-label">Satisfied Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">3</div>
            <div className="stat-label">Years Dev</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">∞</div>
            <div className="stat-label">Coffee Cups</div>
          </div>
        </div>

        {/* Portfolio */}
        <section id="work">
          <h2 className="section-title">Latest Projects</h2>
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_ALPHA</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
                alt="Retro Tech"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#WEB_DESIGN #UI_UX</span>
                <h3 className="project-title">Vaporwave UI System</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  A complete design system inspired by 90s aesthetics with modern React functionality.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_BETA</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Coding"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#DEVELOPMENT #WEB3</span>
                <h3 className="project-title">Dashboard Pro</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  High-performance data visualization for enterprise applications.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_GAMMA</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80"
                alt="Abstract Art"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#BRANDING #IDENTITY</span>
                <h3 className="project-title">Brand Archive</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Reimagining brand identity through pixel art and retro design principles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>AVAILABLE FOR HIRE • </span>
          <span>LET'S BUILD TOGETHER • </span>
          <span>CODE IS ART • </span>
          <span>RETRO VIBES MODERN TECH • </span>
          <span>AVAILABLE FOR HIRE • </span>
          <span>LET'S BUILD TOGETHER • </span>
          <span>CODE IS ART • </span>
          <span>RETRO VIBES MODERN TECH • </span>
        </div>
      </div>

      <div className="container">
        {/* Skills Section */}
        <section className="terminal-section" id="lab">
          <div className="terminal-header">SKILLS_TERMINAL.EXE</div>
          <div className="terminal-row">
            <span className="prompt">{"skylooperr@dev:~$"}</span>
            <span className="command">fetch skills --all</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing core competencies..."}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] 100% - FRONTEND DEVELOPMENT"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████░░░░] 75% - UI/UX DESIGN"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░] 85% - JAVASCRIPT/TYPESCRIPT"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[█████████████░░░] 80% - REACT & NEXT.JS"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████░░░░░] 70% - CREATIVE CODING"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"skylooperr@dev:~$"}</span>
            <span className="command">run contact_protocol.sh</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> Establishing secure connection... "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact">
          <div className="footer-logo">
            <p style={{ color: "var(--accent-retro)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              @SKYLOOPERR
              <br />
              2025©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="https://twitter.com" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                TWITTER
              </a>
              <a href="https://github.com" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                GITHUB
              </a>
              <a href="https://linkedin.com" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                LINKEDIN
              </a>
            </div>
            <p className="copyright">CRAFTED WITH CODE AND CAFFEINE. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

        <div className="footer-badge">
          <a href="https://v0.app" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-label">BUILT:</span>
              <span className="badge-highlight">@skylooperr</span>
              <span className="badge-separator">→</span>
              <span className="badge-label">POWERED BY:</span>
              <span className="badge-highlight">v0.app</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
