"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const achievements = [
    {
      icon: "AWARD",
      title: "Winner — PitchPulse Startup Competition",
      org: "Gujarat Law Society University",
      description: "Won among 10,000+ startup participants for HydroxFlow.",
      year: "2024",
      category: "National Competition",
    },
    {
      icon: "FINALIST",
      title: "Finalist — IIT Delhi EDC Blueprint",
      org: "Indian Institute of Technology Delhi",
      description: "Selected among 12,000+ entrepreneurs. Presented HydroxFlow to experienced founders and mentors.",
      year: "2024",
      category: "Entrepreneurship",
    },
    {
      icon: "FINALIST",
      title: "Finalist — IIT Bombay Tatva Enviropreneur",
      org: "Indian Institute of Technology Bombay",
      description: "Recognized for building technology addressing real-world infrastructure challenges.",
      year: "2024",
      category: "Environmental Tech",
    },
    {
      icon: "RECOGNITION",
      title: "Best Teen-Preneur Award",
      org: "Recognition Initiative",
      description: "Recognized for entrepreneurship, leadership, and innovation at a young age.",
      year: "2024",
      category: "Youth Leadership",
    },
    {
      icon: "TECHNICAL",
      title: "Youngest AI Automation & Web Developer",
      org: "Tech Recognition",
      description: "Recognition for early technical achievements and product development capabilities.",
      year: "2024",
      category: "Technical Excellence",
    },
    {
      icon: "FEATURED",
      title: "Featured by Unstop & Founder Ankit Aggarwal",
      org: "National Startup Initiatives",
      description: "Acknowledged through national startup platforms and recognized by industry leaders.",
      year: "2024",
      category: "Industry Recognition",
    },
    {
      icon: "💻",
      title: "Open Source Leadership",
      org: "Social Summer of Code (SSoC) & GSSoC",
      description: "Project Administrator and Open Source Contributor helping manage collaborative software projects.",
      year: "2023-2024",
      category: "Open Source",
    },
  ]

  const stats = [
    { value: "1", label: "Startup Founded" },
    { value: "39", label: "Early Users" },
    { value: "₹9K+", label: "Testing Revenue" },
    { value: "3", label: "Competition Wins/Finals" },
  ]

  return (
    <section ref={containerRef} className="relative py-32 bg-[#0d0d0d] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#ff4d00] to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-4 py-2 border border-[#ff4d00] rounded-lg">
            <span className="text-[#ff4d00] font-mono text-sm font-bold">JOURNEY</span>
          </div>
          <h2 className="text-5xl font-black font-mono text-white mb-6">Achievements & Recognition</h2>
          <p className="text-lg text-[#999999] max-w-2xl mx-auto leading-relaxed">
            Milestones that reflect my journey as a builder, founder, and lifelong learner. Every achievement is a reminder that the journey has only just begun.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-4 gap-8 mb-24 p-8 bg-[#1a1a1a] border border-[#333333] rounded-2xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black text-[#ff4d00] font-mono mb-2">{stat.value}</div>
              <div className="text-sm text-[#999999] font-mono uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff4d00] via-[#ff4d00] to-transparent opacity-30" />

          {/* Achievements */}
          <div className="space-y-16">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "text-right" : ""}`}
              >
                {/* Left side for even, right side for odd */}
                {i % 2 === 0 ? (
                  <>
                    <div className="group">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-8 bg-[#1a1a1a] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all cursor-pointer relative overflow-hidden group"
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />

                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="px-3 py-2 bg-[#ff4d00] text-[#0d0d0d] rounded font-mono text-xs font-bold whitespace-nowrap">
                              {achievement.icon}
                            </div>
                            <div className="inline-block px-3 py-1 bg-[rgba(255,77,0,0.1)] border border-[#ff4d00] rounded text-[#ff4d00] font-mono text-xs font-bold">
                              {achievement.category}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                          <p className="text-sm text-[#ff4d00] font-mono mb-2">{achievement.org}</p>
                          <p className="text-[#999999] text-sm leading-relaxed">{achievement.description}</p>
                          <div className="text-xs text-[#707070] font-mono mt-4">{achievement.year}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center">
                      <motion.div
                        className="w-6 h-6 bg-[#ff4d00] rounded-full border-4 border-[#0d0d0d] relative z-20"
                        animate={{ boxShadow: ["0 0 0 0 rgba(255,77,0,0.7)", "0 0 0 10px rgba(255,77,0,0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Center dot */}
                    <div className="flex justify-center">
                      <motion.div
                        className="w-6 h-6 bg-[#ff4d00] rounded-full border-4 border-[#0d0d0d] relative z-20"
                        animate={{ boxShadow: ["0 0 0 0 rgba(255,77,0,0.7)", "0 0 0 10px rgba(255,77,0,0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <div className="group">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-8 bg-[#1a1a1a] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all cursor-pointer relative overflow-hidden group"
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-l from-[#ff4d00] to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />

                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4 justify-end">
                            <div className="inline-block px-3 py-1 bg-[rgba(255,77,0,0.1)] border border-[#ff4d00] rounded text-[#ff4d00] font-mono text-xs font-bold">
                              {achievement.category}
                            </div>
                            <div className="text-4xl">{achievement.icon}</div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                          <p className="text-sm text-[#ff4d00] font-mono mb-2">{achievement.org}</p>
                          <p className="text-[#999999] text-sm leading-relaxed">{achievement.description}</p>
                          <div className="text-xs text-[#707070] font-mono mt-4">{achievement.year}</div>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ending Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 text-center p-12 bg-gradient-to-r from-[rgba(255,77,0,0.1)] to-transparent border border-[#ff4d00] rounded-2xl"
        >
          <p className="text-2xl font-mono text-[#ff4d00] italic leading-relaxed">
            "Every milestone is a reminder that the journey has only just begun."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
