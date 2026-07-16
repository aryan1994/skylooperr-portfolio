"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

export default function PremiumHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Canvas background animation with grid and particles
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(13, 13, 13, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated grid
      ctx.strokeStyle = "rgba(255, 77, 0, 0.05)"
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw and update particles
      ctx.fillStyle = "rgba(255, 77, 0, 0.3)"
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
    }),
  }

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-[#0d0d0d]">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff4d00] to-transparent rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#ff8533] to-transparent rounded-full opacity-15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 h-screen flex items-center">
        <motion.div
          className="grid grid-cols-2 gap-16 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.div className="space-y-4">
              <div className="flex flex-wrap gap-2 text-6xl font-black leading-tight font-mono">
                {["Building", "Startups.", "Engineering", "Products.", "Securing", "the Future."].map(
                  (word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={wordVariants}
                      className={i % 2 === 0 ? "text-white" : "text-[#ff4d00]"}
                    >
                      {word}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-[#999999] max-w-lg leading-relaxed">
              I&apos;m Aryan Kumar, a 14-year-old founder and product engineer from India. Founder of HydroxFlow, modernizing water logistics through technology. Winner of PitchPulse, IIT Delhi Blueprint, and IIT Bombay Tatva. Currently building venture-scale technology and transitioning into cybersecurity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-[#ff4d00] text-[#0d0d0d] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] transition-all transform hover:scale-105 font-mono">
                Explore My Journey
              </button>
              <button className="px-8 py-4 border-2 border-[#ff4d00] text-[#ff4d00] font-bold rounded-lg hover:bg-[rgba(255,77,0,0.1)] transition-all font-mono">
                View Projects
              </button>
              <button className="px-8 py-4 border-2 border-[#999999] text-[#999999] font-bold rounded-lg hover:border-white hover:text-white transition-all font-mono">
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              {[
                { icon: "𝕏", href: "#" },
                { icon: "Git", href: "#" },
                { icon: "In", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 border border-[#ff4d00] rounded-lg flex items-center justify-center text-[#ff4d00] hover:bg-[rgba(255,77,0,0.1)] transition-all font-mono text-sm font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d00] to-transparent rounded-2xl opacity-20 blur-2xl" />

              {/* Profile image */}
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border-2 border-[#ff4d00] backdrop-blur-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000258993-removebg-preview-removebg-preview-PdjlM748o7Ejyy64U50gNsvB0JZHVk.png"
                  alt="Aryan Kumar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>


            </div>
          </motion.div>
        </motion.div>
      </div>




    </section>
  )
}
