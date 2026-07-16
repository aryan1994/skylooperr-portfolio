"use client"

import Link from "next/link"

export default function Openings() {
  const openings = [
    {
      id: 1,
      position: "Business Development Intern",
      company: "HydroxFlow",
      type: "Internship • Remote",
      requirements: [
        "Client Acquisition & Relationship Management",
        "Strong Presentation & Communication Skills",
        "Market Research & Sales Aptitude",
        "Initiative-Driven with High Accountability",
      ],
      benefits: [
        "Letter Of Recommendation",
        "Career growth opportunities",
        "Supportive work environment",
        "Certificate Of Completion",
      ],
      applyEmail: "skylooperr@gmail.com",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BD-AZg2F5sSGoOKh8lmq0lFfkkj1Z9SqQ.png",
    },
  ]

  return (
    <section style={{ padding: "80px 0", background: "var(--bg-color)" }}>
      <div className="container">
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "var(--text-primary)",
            }}
          >
            Openings
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Join our team and help us revolutionize India's water logistics industry.
          </p>
        </div>

        <div style={{ display: "grid", gap: "40px", maxWidth: "900px", margin: "0 auto" }}>
          {openings.map((opening) => (
            <div
              key={opening.id}
              className="card-3d"
              style={{
                border: "2px solid var(--border-color)",
                background: "var(--surface)",
                padding: "40px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            >
              {opening.image && (
                <img
                  src={opening.image}
                  alt={opening.position}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    marginBottom: "30px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                  }}
                />
              )}

              <div style={{ marginBottom: "25px" }}>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  {opening.position}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--accent-retro)",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  {opening.company}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    marginTop: "5px",
                  }}
                >
                  {opening.type}
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    color: "var(--text-primary)",
                    borderBottom: "2px solid var(--accent-retro)",
                    paddingBottom: "10px",
                  }}
                >
                  Requirements
                </h4>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {opening.requirements.map((req, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "10px",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--accent-retro)",
                          fontWeight: "700",
                        }}
                      >
                        →
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    color: "var(--text-primary)",
                    borderBottom: "2px solid var(--accent-retro)",
                    paddingBottom: "10px",
                  }}
                >
                  Benefits
                </h4>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {opening.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "10px",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--accent-retro)",
                          fontWeight: "700",
                        }}
                      >
                        →
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href={`mailto:${opening.applyEmail}?subject=Application for ${opening.position}&body=Hi,%0D%0A%0D%0AI am interested in the ${opening.position} position at ${opening.company}.%0D%0A%0D%0ABest regards`}
                  className="btn-retro"
                  style={{
                    display: "inline-block",
                    background: "var(--accent-retro)",
                    color: "var(--bg-color)",
                    padding: "15px 40px",
                    fontWeight: "700",
                    textDecoration: "none",
                    border: "2px solid var(--text-primary)",
                    boxShadow: "4px 4px 0px var(--text-primary)",
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
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                  Email: {opening.applyEmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
