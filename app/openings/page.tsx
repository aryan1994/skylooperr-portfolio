"use client"

import { motion } from "framer-motion"

export default function OpeningsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <>
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div className="logo">ARYAN KUMAR</div>
          <nav className="nav-links" style={{ gap: "1.5rem" }}>
            <a href="/">HOME</a>
            <a href="/#work">PROJECTS</a>
            <a href="/#lab">SKILLS</a>
            <a href="/contact">CONTACT</a>
          </nav>
          <div className="system-status">SYS_UP: 24:12:05:08 | CPU: 12%</div>
        </div>
      </header>

      <div className="container w-full px-4 sm:px-6 lg:px-8" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginBottom: "60px", textAlign: "center" }}>
          <motion.h1 variants={itemVariants} style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800", textTransform: "uppercase", marginBottom: "20px" }}>
            We Are Hiring
          </motion.h1>
          <motion.p variants={itemVariants} style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>
            Join HydroxFlow and help revolutionize India's water logistics industry. We are looking for talented individuals ready to make an impact.
          </motion.p>
        </motion.div>

        {/* Pamphlet Image - Full Width Display */}
        <motion.div variants={itemVariants} style={{ marginBottom: "40px", maxWidth: "100%", overflow: "hidden" }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD-AZg2F5sSGoOKh8lmq0lFfkkj1Z9SqQ.png"
            alt="Business Development Internship - HydroxFlow"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "900px",
              objectFit: "contain",
              border: "2px solid var(--border-color)",
              borderRadius: "12px",
              padding: "10px",
              background: "var(--surface)",
            }}
          />
        </motion.div>

        {/* Position Details */}
        <motion.div variants={itemVariants} style={{ maxWidth: "900px", margin: "0 auto", width: "100%", padding: "0 1rem" }}>
          <div style={{ background: "var(--surface)", border: "2px solid var(--border-color)", padding: "clamp(1.5rem, 5vw, 40px)", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "800", marginBottom: "30px" }}>Business Development Intern</h2>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: "700", marginBottom: "15px", color: "var(--accent-retro)", textTransform: "uppercase" }}>
                Position Details
              </h3>
              <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
                <strong>Company:</strong> HydroxFlow
              </p>
              <p style={{ lineHeight: "1.8", marginBottom: "10px" }}>
                <strong>Type:</strong> Internship (Remote/On-site)
              </p>
              <p style={{ lineHeight: "1.8" }}>
                <strong>Status:</strong> Open
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px", color: "var(--accent-retro)", textTransform: "uppercase" }}>
                Key Responsibilities
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {[
                  "Client Acquisition & Relationship Management",
                  "Strong Presentation & Communication Skills",
                  "Market Research & Sales Aptitude",
                  "Initiative-Driven with High Accountability",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--accent-retro)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px", color: "var(--accent-retro)", textTransform: "uppercase" }}>
                What You Will Get
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {[
                  "Letter Of Recommendation",
                  "Career growth opportunities",
                  "Supportive work environment",
                  "Certificate Of Completion",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--accent-retro)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "40px", padding: "20px", background: "var(--bg-color)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <p style={{ margin: 0, fontSize: "1rem" }}>
                <strong>How to Apply:</strong>
              </p>
              <p style={{ margin: "10px 0 0 0", color: "var(--accent-retro)" }}>
                Send your CV & Cover Letter to:{" "}
                <a href="mailto:skylooperr@gmail.com" style={{ color: "var(--accent-retro)", textDecoration: "underline" }}>
                  skylooperr@gmail.com
                </a>
              </p>
              <p style={{ margin: "10px 0 0 0", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                You can also apply via LinkedIn or scan the QR code in the pamphlet above.
              </p>
            </div>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <a
                href="mailto:skylooperr@gmail.com?subject=Application for Business Development Intern&body=Hi,%0D%0A%0D%0AI am interested in the Business Development Intern position at HydroxFlow.%0D%0A%0D%0ABest regards"
                style={{
                  display: "inline-block",
                  background: "var(--accent-retro)",
                  color: "var(--bg-color)",
                  padding: "15px 40px",
                  fontWeight: "700",
                  textDecoration: "none",
                  border: "2px solid var(--text-primary)",
                  boxShadow: "4px 4px 0px var(--text-primary)",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)"
                  e.currentTarget.style.boxShadow = "2px 2px 0px var(--text-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)"
                  e.currentTarget.style.boxShadow = "4px 4px 0px var(--text-primary)"
                }}
              >
                Apply Now
              </a>
              <a
                href="https://www.linkedin.com/company/hydroxflow/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                  padding: "15px 40px",
                  fontWeight: "700",
                  textDecoration: "none",
                  border: "2px solid var(--border-color)",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-retro)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)"
                }}
              >
                Visit LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <footer style={{ marginTop: "80px", borderTop: "1px solid var(--border-color)", paddingTop: "40px" }}>
        <div className="container" style={{ textAlign: "center", paddingBottom: "20px" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Questions? Contact skylooperr@gmail.com or visit our website
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "10px" }}>
            Copyright 2026 - HydroxFlow
          </p>
        </div>
      </footer>
    </>
  )
}
