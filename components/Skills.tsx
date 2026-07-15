"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skillsData = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "C++",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  "Frontend Development": [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Responsive Design",
    "PWA",
    "Performance",
    "UI Architecture",
  ],
  "Backend & Databases": [
    "Supabase",
    "Firebase",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Authentication",
    "Database Design",
  ],
  Cybersecurity: [
    "Linux",
    "Kali Linux",
    "Networking",
    "Web Security",
    "OWASP Top 10",
    "Ethical Hacking",
    "OSINT",
    "Security Research",
    "Python Automation",
  ],
  "Design & Creative": [
    "Figma",
    "UI/UX Design",
    "Adobe Photoshop",
    "Canva",
    "Graphic Design",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Brand Identity",
  ],
  "Developer Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    "Netlify",
    "n8n",
    "Notion",
    "Unity Engine",
  ],
  Entrepreneurship: [
    "Startup Building",
    "Product Strategy",
    "MVP Development",
    "Customer Validation",
    "Pitch Decks",
    "Business Dev",
    "Leadership",
    "Public Speaking",
    "Problem Solving",
    "Community",
  ],
}

const primaryTechs = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "Tailwind CSS",
  "Figma",
  "Python",
  "GSAP",
  "Framer Motion",
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    )
  }, [])

  const isPrimaryTech = (skill: string) => primaryTechs.includes(skill)

  return (
    <section ref={containerRef} className="py-20 bg-[#0d0d0d] border-t border-[#333333]">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4 font-mono"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-[#999999] max-w-2xl mx-auto"
          >
            A blend of engineering, product thinking, design, cybersecurity, and entrepreneurship that enables me to build impactful digital products from idea to execution.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.05 }}
              className="p-8 bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all duration-300 group"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#ff4d00] to-[#ff8533] rounded"></span>
                {category[0]}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category[1].map((skill, skillIndex) => (
                  <motion.button
                    key={skillIndex}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
                      isPrimaryTech(skill)
                        ? "bg-[#ff4d00] text-[#0d0d0d] border-[#ff4d00] font-bold shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:shadow-[0_0_30px_rgba(255,77,0,0.6)]"
                        : "bg-[#1f1f1f] text-[#999999] border-[#333333] hover:border-[#ff4d00] hover:text-[#ff4d00] hover:shadow-[0_0_15px_rgba(255,77,0,0.2)]"
                    }`}
                    title={skill}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emphasis Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-[#ff4d00] from-10% to-transparent rounded-xl border border-[#ff4d00] text-center"
        >
          <p className="text-black font-mono font-bold text-lg">
            Primarily focused on Next.js, React, TypeScript, and modern web technologies for building venture-scale products.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
