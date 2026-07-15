"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useInView } from "framer-motion"
import { useRef } from "react"

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2
    const increment = end / (duration * 60)

    const timer = setInterval(() => {
      start += increment
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// Scroll to section
function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("hero")
  const { scrollYProgress } = useScroll()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[rgba(10,10,10,0.8)] border-b border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold bg-gradient-to-r from-white to-[#00d9ff] bg-clip-text text-transparent"
          >
            ARYAN SHARMA
          </motion.div>

          <nav className="flex gap-8">
            {["hero", "mission", "hydroxflow", "timeline", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  setActiveNav(item)
                  scrollToSection(item)
                }}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeNav === item ? "text-[#00d9ff]" : "text-[#b0b0b0] hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeNav === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#00d9ff]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Building{" "}
                <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffff] bg-clip-text text-transparent">
                  ventures
                </span>{" "}
                that solve real problems
              </h1>

              <p className="text-lg text-[#b0b0b0] leading-relaxed mb-8 max-w-lg">
                Founder of HydroxFlow, digitizing India&apos;s water logistics. Passionate about infrastructure, cybersecurity, and building technology that scales from Tier-2 cities to global markets.
              </p>

              <div className="flex gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("hydroxflow")}
                  className="px-6 py-3 bg-[#00d9ff] text-[#0a0a0a] font-bold rounded-lg hover:shadow-lg hover:shadow-[rgba(0,217,255,0.3)] transition-all"
                >
                  Explore HydroxFlow
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[rgba(0,217,255,0.1)] transition-all"
                >
                  Get in Touch
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8">
                {[
                  { label: "Early Users", value: "39+" },
                  { label: "Revenue Generated", value: "₹9K+" },
                  { label: "Awards", value: "3" },
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                    <div className="text-2xl font-bold text-[#00d9ff]">{stat.value}</div>
                    <div className="text-sm text-[#707070]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-[#2a2a2a]">
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000258993-removebg-preview-removebg-preview-PdjlM748o7Ejyy64U50gNsvB0JZHVk.png"
                  alt="Aryan Sharma"
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00d9ff] rounded-full opacity-10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#00d9ff] rounded-sm" />
              Why I Build
            </h2>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Solving Real Problems",
                  desc: "India's water logistics is 95% unorganized. HydroxFlow brings digital infrastructure to a multi-billion dollar market.",
                },
                {
                  title: "Venture Scale",
                  desc: "Building products that can grow from Tier-2/3 cities across India and eventually global markets. Every decision prioritizes scalability.",
                },
                {
                  title: "Next: Cybersecurity",
                  desc: "After proving product-market fit, my next mission is cybersecurity infrastructure. Helping enterprises stay secure in India.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 bg-[#111111] border border-[#2a2a2a] rounded-lg hover:border-[#00d9ff] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(0,217,255,0.1)]"
                >
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-[#b0b0b0] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Investors Should Remember */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-20 p-8 bg-[#111111] border border-[#2a2a2a] rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Why Investors Should Remember Me</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Founder-led customer validation with real traction (39 early users, ₹9K+ revenue)",
                  "Won 3 prestigious startup competitions in first iteration",
                  "Deep domain expertise in water logistics and infrastructure",
                  "Clear roadmap to seed fundraising and pilot expansion",
                  "Proven ability to iterate based on user feedback",
                  "Vision to expand from India to global water infrastructure",
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="text-[#00d9ff] font-bold text-lg mt-1">✓</div>
                    <p className="text-[#b0b0b0]">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HydroxFlow Case Study */}
      <section id="hydroxflow" className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#00d9ff] rounded-sm" />
              HydroxFlow: Water Logistics Modernized
            </h2>

            <div className="grid grid-cols-2 gap-12 mt-12">
              {/* Left: The Story */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#00d9ff]">The Problem</h3>
                <p className="text-[#b0b0b0] leading-relaxed mb-6">
                  India's water tanker industry is fragmented, unorganized, and inefficient. Customers struggle with transparent pricing and reliability. Operators manage bookings manually with zero operational insights.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#00d9ff]">The Solution</h3>
                <p className="text-[#b0b0b0] leading-relaxed mb-6">
                  HydroxFlow is a B2B2C platform enabling customers to book water tankers online with transparent pricing, real-time tracking, and digital payments. For operators, we provide complete operational management tools.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#00d9ff]">The Vision</h3>
                <p className="text-[#b0b0b0] leading-relaxed">
                  Become the digital infrastructure powering water delivery across Tier-2 and Tier-3 cities in India. Eventually expand to other essential logistics markets.
                </p>

                <a
                  href="https://preview--hydroxflow.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 px-6 py-3 bg-[#00d9ff] text-[#0a0a0a] font-bold rounded-lg hover:shadow-lg hover:shadow-[rgba(0,217,255,0.3)] transition-all"
                >
                  Visit Product →
                </a>
              </div>

              {/* Right: Metrics */}
              <div className="space-y-6">
                {[
                  { label: "Early Users", value: "39", suffix: "+" },
                  { label: "Revenue Generated", value: "₹9,000", suffix: "+" },
                  { label: "Award Wins", value: "3" },
                  { label: "Cities Targeted", value: "Tier-2 & 3" },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-6 bg-[#111111] border border-[#2a2a2a] rounded-lg hover:border-[#00d9ff] transition-all"
                  >
                    <div className="text-4xl font-bold text-[#00d9ff] mb-2">
                      {metric.value}
                      {metric.suffix}
                    </div>
                    <div className="text-[#707070] text-sm uppercase tracking-wider">{metric.label}</div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 bg-gradient-to-r from-[#00d9ff] from-10% to-transparent rounded-lg"
                >
                  <h4 className="text-black font-bold mb-3">Roadmap</h4>
                  <ul className="text-black text-sm space-y-2">
                    <li>✓ AI-powered demand forecasting</li>
                    <li>✓ Fleet optimization</li>
                    <li>✓ Vendor management suite</li>
                    <li>✓ Enterprise dashboards</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#00d9ff] rounded-sm" />
              Execution Proof
            </h2>

            <div className="space-y-8 relative">
              {[
                { date: "2024", title: "Founded HydroxFlow", desc: "Started with customer research and MVP development" },
                { date: "Early 2024", title: "Won PitchPulse Competition", desc: "Recognized for solving real market problem" },
                { date: "Mid 2024", title: "39 Early Users & ₹9K+ Revenue", desc: "Product-market fit validation in real usage" },
                { date: "Late 2024", title: "IIT Finals (Delhi & Bombay)", desc: "Finalist at India's premier startup events" },
                { date: "2025", title: "Seed Fundraising Prep", desc: "Scaling operations and expanding to multiple cities" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-20 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-[#0a0a0a] rounded-full border-2 border-[#00d9ff] flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#00d9ff] rounded-full" />
                  </div>
                  <div className="text-sm font-bold text-[#00d9ff] mb-1">{item.date}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-[#b0b0b0]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Great</h2>
            <p className="text-xl text-[#b0b0b0] mb-12 max-w-2xl mx-auto">
              Whether you&apos;re an investor, founder, or someone interested in water logistics, cybersecurity, or building ventures—let&apos;s connect.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:aryan@example.com"
                className="px-8 py-4 bg-[#00d9ff] text-[#0a0a0a] font-bold rounded-lg hover:shadow-lg hover:shadow-[rgba(0,217,255,0.3)] transition-all"
              >
                Email Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[rgba(0,217,255,0.1)] transition-all"
              >
                LinkedIn
              </motion.a>
            </div>

            <p className="text-[#707070] text-sm">Based in India • Available for investments, partnerships, and collaborations</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] py-12">
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <p className="text-[#707070] text-sm">© 2025 Aryan Sharma. All rights reserved.</p>
          <p className="text-[#707070] text-sm">Crafted with focus on building ventures that matter.</p>
        </div>
      </footer>
    </div>
  )
}
