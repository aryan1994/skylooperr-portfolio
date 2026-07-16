"use client"

import { useEffect, useState } from "react"
import ProjectShowcase from "@/components/ProjectShowcase"
import PremiumHero from "@/components/PremiumHero"
import Achievements from "@/components/Achievements"
import Skills from "@/components/Skills"
import InteractiveCursor from "@/components/InteractiveCursor"

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
          if (entry.target.parentElement) {
            const index = Array.from(entry.target.parentElement.children).indexOf(entry.target)
            entry.target.style.animationDelay = `${index * 100}ms`
          }
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
      <InteractiveCursor />
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
            <a href="/contact">CONTACT</a>
            <a href="/openings">OPENINGS</a>
            <a href="/ARYAN_RESUME.pdf" download style={{ background: "var(--accent-retro)", color: "var(--bg-color)", padding: "8px 16px", borderRadius: "4px", fontWeight: "700" }}>RESUME</a>
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

      {/* Skills Section */}
      <section id="lab">
        <Skills />
      </section>

      {/* Achievements Section */}
      <section id="archive">
        <Achievements />
      </section>

      <div className="container">
        {/* Footer */}
        <footer>
          <div className="footer-logo">
            <p style={{ color: "var(--accent-retro)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              @SKYLOOPERR 2026
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px", display: "flex", gap: "15px", justifyContent: "flex-end" }}>
              <a href="https://www.linkedin.com/in/skylooperr/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.2rem" }} title="LinkedIn">
                in
              </a>
              <a href="https://github.com/aryan1994/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.2rem" }} title="GitHub">
                ◇
              </a>
              <a href="https://x.com/skylooperr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.2rem" }} title="X">
                𝕏
              </a>
              <a href="https://www.reddit.com/u/skylooperr/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.2rem" }} title="Reddit">
                ⨀
              </a>
              <a href="https://www.instagram.com/skylooperr/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.2rem" }} title="Instagram">
                ◉
              </a>
            </div>

          </div>
        </footer>

        <div className="footer-badge">
          <div className="badge-content-footer">
            <span className="badge-label">CREATED BY:</span>
            <span className="badge-highlight">@skylooperr</span>
          </div>
        </div>
      </div>
    </>
  )
}
