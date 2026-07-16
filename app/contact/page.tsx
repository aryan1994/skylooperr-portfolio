"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", category: "contact" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const categoryText = {
      contact: "Contact Me",
      work: "Work With Us",
      collaborate: "Collaborate",
    }[formData.category] || "Contact Me"

    const subject = encodeURIComponent(`${categoryText} - From ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Aryan,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )

    window.location.href = `mailto:skylooperr@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] py-20">
      {/* Navigation */}
      <header className="border-b border-[#333333] bg-[#1a1a1a] sticky top-0 z-50">
        <div className="container mx-auto px-8 h-16 flex items-center">
          <a href="/" className="text-2xl font-bold text-[#ff4d00] font-mono">
            @SKYLOOPERR
          </a>
        </div>
      </header>

      <div className="container mx-auto px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4 font-mono">Get in Touch</h1>
            <p className="text-xl text-[#999999]">
              Let's build something great together. Whether you want to collaborate, discuss opportunities, or just say hello—I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            {/* Contact Info - Left */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="p-8 bg-[#1a1a1a] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all">
                <h3 className="text-lg font-bold text-white mb-4 font-mono">
                  EMAIL
                </h3>
                <a href="mailto:skylooperr@gmail.com" className="text-[#ff4d00] hover:underline text-base">
                  skylooperr@gmail.com
                </a>
              </div>

              <div className="p-8 bg-[#1a1a1a] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all">
                <h3 className="text-lg font-bold text-white mb-4 font-mono">
                  LINKEDIN
                </h3>
                <a
                  href="https://www.linkedin.com/in/skylooperr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4d00] hover:underline text-base"
                >
                  linkedin.com/in/skylooperr
                </a>
              </div>

              <div className="p-8 bg-[#1a1a1a] border border-[#333333] rounded-xl hover:border-[#ff4d00] transition-all">
                <h3 className="text-lg font-bold text-white mb-4 font-mono">
                  INSTAGRAM
                </h3>
                <a
                  href="https://www.instagram.com/skylooperr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4d00] hover:underline text-base"
                >
                  @skylooperr
                </a>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#ff4d00] from-10% to-transparent rounded-xl">
                <p className="text-black font-mono font-bold text-sm">
                  Best time to reach: 9 AM - 6 PM IST (Weekdays)
                </p>
              </div>
            </motion.div>

            {/* Contact Form - Spanning 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8 p-12 bg-[#1a1a1a] border border-[#333333] rounded-xl">
                {/* Name Input */}
                <div>
                  <label className="block text-white font-mono font-bold mb-3 text-lg">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 text-lg bg-[#0d0d0d] border-2 border-[#333333] rounded-lg text-white font-mono focus:border-[#ff4d00] focus:outline-none transition-all"
                    placeholder="Aryan Kumar"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-white font-mono font-bold mb-3 text-lg">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 text-lg bg-[#0d0d0d] border-2 border-[#333333] rounded-lg text-white font-mono focus:border-[#ff4d00] focus:outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Category Select */}
                <div>
                  <label className="block text-white font-mono font-bold mb-3 text-lg">What's this about? *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-6 py-4 text-lg bg-[#0d0d0d] border-2 border-[#333333] rounded-lg text-white font-mono focus:border-[#ff4d00] focus:outline-none transition-all"
                  >
                    <option value="contact">Contact Me</option>
                    <option value="work">Work With Us</option>
                    <option value="collaborate">Collaborate</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-white font-mono font-bold mb-3 text-lg">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={10}
                    className="w-full px-6 py-4 text-lg bg-[#0d0d0d] border-2 border-[#333333] rounded-lg text-white font-mono focus:border-[#ff4d00] focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 text-xl bg-[#ff4d00] text-[#0d0d0d] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,77,0,0.4)] transition-all font-mono disabled:opacity-50"
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
