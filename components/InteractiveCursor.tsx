"use client"

import { useEffect, useRef } from "react"

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 20 + "px"
        cursorRef.current.style.top = e.clientY - 20 + "px"
      }

      // Create trail effect
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = e.clientX - 4 + "px"
      trail.style.top = e.clientY - 4 + "px"
      document.body.appendChild(trail)

      trailRef.current.push(trail)

      // Remove old trail particles
      if (trailRef.current.length > 20) {
        const old = trailRef.current.shift()
        if (old) old.remove()
      }

      // Fade out trail
      setTimeout(() => {
        trail.style.opacity = "0"
        trail.style.transition = "opacity 0.5s ease-out"
        setTimeout(() => trail.remove(), 500)
      }, 100)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return <div ref={cursorRef} className="cursor-glow" />
}
