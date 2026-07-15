"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const projects = [
  {
    id: 1,
    title: "HydroxFlow",
    subtitle: "India's First Digital Water Logistics Platform",
    category: "Startup • SaaS • Logistics",
    status: "Early Testing",
    description:
      "Modernizing India's fragmented water tanker industry with a transparent, technology-driven platform. Customers can book tankers online while operators manage operations through our comprehensive dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db40?w=1200&q=80",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000257499-removebg-preview-cGRu3Mr3sNmhAtBQPdK3q6wwLNN0Jj.png",
    metrics: [
      { label: "Early Users", value: "39+" },
      { label: "Revenue", value: "₹9K+" },
      { label: "Award Wins", value: "3" },
    ],
    tech: ["React", "Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    links: {
      website: "https://preview--hydroxflow.lovable.app",
      github: "https://github.com/aryan1994/",
      caseStudy: "/projects/hydroxflow",
    },
    caseStudy: {
      problem:
        "India's water tanker industry remains 95% offline and inefficient. Customers rely on phone calls to unorganized brokers, pricing is opaque, and operators have no visibility into their business.",
      opportunity:
        "India has 7,930+ cities, with only 40% having reliable water infrastructure. The water logistics market is worth $10B+ annually with zero digital penetration.",
      solution:
        "HydroxFlow creates a transparent, B2B2C platform connecting customers to verified tanker operators with real-time tracking, digital payments, and automated dispatch.",
      features: [
        "Online Booking System",
        "Real-time Tracking",
        "Digital Payments",
        "Operator Dashboard",
        "Vendor Management",
        "Subscription Plans",
        "Transparent Pricing",
      ],
      techStack: {
        frontend: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        backend: ["Supabase", "PostgreSQL"],
        design: ["Figma"],
      },
      challenges: [
        "Customer acquisition in untapped markets",
        "Building operator trust and adoption",
        "Real-time logistics coordination",
        "Payment integration and compliance",
      ],
      roadmap: [
        "AI Demand Forecasting",
        "Driver App",
        "Fleet Management",
        "Smart Routing",
        "IoT Water Monitoring",
        "Enterprise Dashboard",
        "Municipality Integrations",
      ],
      impact: {
        users: "39 early users in beta",
        revenue: "₹9,000+ generated in testing phase",
        awards: "Winner: PitchPulse | Finalist: IIT Delhi EDC Blueprint",
      },
    },
  },
  {
    id: 2,
    title: "Homiyo.Decors",
    subtitle: "Building a Home Décor Brand",
    category: "E-Commerce • Branding • Design",
    status: "Completed",
    description:
      "A complete home décor platform where I designed the user experience, branding, product pages, and visual identity from scratch. Focused on customer journey and conversion optimization.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIO2DvoMnpzSI853ANKzdMuO8Y18m9.png",
    metrics: [
      { label: "Products", value: "500+" },
      { label: "Countries", value: "15+" },
      { label: "Conversion", value: "+45%" },
    ],
    tech: ["Shopify", "Liquid", "TailwindCSS", "Figma"],
    links: {
      website: "https://homiyo.store.shoopy.in/",
      github: "https://github.com/aryan1994/",
      caseStudy: "/projects/homiyo",
    },
  },
  {
    id: 3,
    title: "Personal Portfolio",
    subtitle: "Crafting My Digital Identity",
    category: "Personal Brand • Design • Animation",
    status: "Live",
    description:
      "A premium personal portfolio combining storytelling, animations, and modern UI design. Built to create memorable experiences for recruiters, founders, and investors exploring my work.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&q=80",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-creative-text-banner-with-black-background-illustration_755074-98.jpg-2ntKF4oKEeypkwMKjKrQK3IQTrKPWX.avif",
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Accessibility", value: "100/100" },
      { label: "SEO Score", value: "100/100" },
    ],
    tech: ["Next.js", "Framer Motion", "GSAP", "TailwindCSS", "Lenis"],
    links: {
      website: "https://retro-brutalist-portfolio-mqqgyog4u-skylooperr-3727s-projects.vercel.app/",
      github: "https://github.com/aryan1994/",
      caseStudy: "/projects/portfolio",
    },
  },
  {
    id: 4,
    title: "Game Development",
    subtitle: "Game Development Journey",
    category: "Game Development • C# • Unity",
    status: "Completed",
    description:
      "A collection of Unity game prototypes exploring gameplay mechanics, physics systems, UI design, and rapid prototyping. This journey strengthened problem-solving skills and laid foundation for product engineering.",
    image: "https://images.unsplash.com/photo-1538481143235-5d630027f67e?w=1200&q=80",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-07-15%20at%202.10.44%E2%80%AFPM-vr6TdX5LKUqNH2WmEQePb5BaQvVaAI.png",
    metrics: [
      { label: "Projects", value: "8+" },
      { label: "Prototypes", value: "15+" },
      { label: "Mechanics", value: "20+" },
    ],
    tech: ["Unity", "C#", "Blender", "PlayFab"],
    links: {
      website: "https://skylooperr.itch.io/",
      github: "https://github.com/aryan1994/",
      caseStudy: "/projects/games",
    },
  },
]

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // GSAP animations
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top 20%",
        end: "bottom 80%",
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="work" className="projects-showcase">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="projects-header"
        >
          <h2 className="section-title">FLAGSHIP PROJECTS</h2>
          <p className="projects-subtitle">
            My best work spanning startups, design, and engineering. Each project represents a unique challenge solved with strategy, creativity,
            and execution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={containerRef} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="project-showcase-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="project-image-container">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-showcase-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="project-overlay">
                  <div className="project-status">{project.status}</div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                {project.logo && (
                  <div className="project-logo-container">
                    <img src={project.logo} alt={project.title} className="project-logo" />
                  </div>
                )}
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-dot"></span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                {/* Metrics */}
                <div className="project-metrics">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="metric-item">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="project-actions">
                  <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="btn-cta btn-primary">
                    Link
                  </a>
                  <a href={project.links.caseStudy} className="btn-cta btn-secondary">
                    Read Case Study
                  </a>
                  {project.links.github !== "https://github.com/aryan1994/" && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-cta btn-secondary">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-showcase {
          padding: 100px 0;
          border-top: 2px solid var(--border-color);
          border-bottom: 2px solid var(--border-color);
        }

        .projects-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .projects-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 20px auto 0;
          line-height: 1.7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }

        .project-showcase-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          border: 2px solid var(--border-color);
          padding: 30px;
          background: var(--surface);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .project-showcase-card:hover {
          border-color: var(--accent-retro);
          box-shadow: 12px 12px 0px var(--accent-retro);
          transform: translateY(-8px);
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
          border: 2px solid var(--border-color);
          aspect-ratio: 16 / 10;
        }

        .project-showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(120%);
          transition: all 0.6s ease;
        }

        .project-showcase-card:hover .project-showcase-image {
          filter: grayscale(0%) contrast(100%);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
        }

        .project-status {
          background: var(--accent-retro);
          color: var(--bg-color);
          padding: 8px 16px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          border: 2px solid var(--text-primary);
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .project-dot {
          width: 4px;
          height: 4px;
          background: var(--accent-retro);
          border-radius: 50%;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 800;
          font-family: "Space Mono", monospace;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .project-subtitle-text {
          font-size: 1rem;
          color: var(--accent-retro);
          font-weight: 600;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .project-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-retro);
          font-family: "Space Mono", monospace;
        }

        .metric-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          font-weight: 600;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 15px 0;
        }

        .tech-badge {
          background: var(--surface);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 0;
        }

        .project-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-cta {
          padding: 12px 24px;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          border: 2px solid var(--text-primary);
          transition: all 0.3s ease;
          font-family: "Space Mono", monospace;
          display: inline-block;
        }

        .btn-primary {
          background: var(--accent-retro);
          color: var(--bg-color);
          box-shadow: 4px 4px 0px var(--text-primary);
        }

        .btn-primary:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px var(--text-primary);
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-retro);
          box-shadow: 2px 2px 0px var(--accent-retro);
        }

        .btn-secondary:hover {
          background: var(--accent-retro);
          color: var(--bg-color);
          transform: translate(1px, 1px);
        }

        @media (max-width: 1024px) {
          .project-showcase-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .project-image-container {
            order: 2;
          }

          .project-content {
            order: 1;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .project-metrics {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-showcase {
            padding: 60px 0;
          }

          .projects-grid {
            gap: 40px;
          }

          .project-showcase-card {
            padding: 20px;
            gap: 20px;
          }

          .project-showcase-card:hover {
            box-shadow: 6px 6px 0px var(--accent-retro);
          }

          .project-title {
            font-size: 1.25rem;
          }

          .project-metrics {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .project-actions {
            gap: 10px;
          }

          .btn-cta {
            padding: 10px 16px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}
