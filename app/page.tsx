"use client"

import { useEffect, useState } from "react"
import ProjectShowcase from "@/components/ProjectShowcase"
import PremiumHero from "@/components/PremiumHero"
import Achievements from "@/components/Achievements"

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

      {/* Premium Hero Section */}
      <PremiumHero />

      <div className="container">

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">13+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">3x</div>
            <div className="stat-label">Competition Winner</div>
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

        {/* Premium Projects Showcase */}
        <ProjectShowcase />
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
      </div>

      {/* Achievements Section */}
      <Achievements />

      <div className="container">
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
