"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function SKYBOT() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! I'm SKYBOT, your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    setTimeout(() => {
      const responses: { [key: string]: string } = {
        hello: "Hello! I'm here to help you learn about ARYAN KUMAR's portfolio and projects.",
        projects:
          "ARYAN has built 13+ projects including HydroxFlow (water logistics startup), Homiyo.Decors (e-commerce), games, and more!",
        hydroxflow: "HydroxFlow is India's first digital water logistics platform, modernizing the water tanker industry.",
        skills:
          "ARYAN is skilled in React, Next.js, TypeScript, Python, UI/UX Design, Game Development, and more.",
        hire: "Want to hire ARYAN or discuss opportunities? Visit the Openings section or email skylooperr@gmail.com",
        contact:
          "You can reach out via email (skylooperr@gmail.com), LinkedIn (linkedin.com/in/skylooperr), or Instagram (@skylooperr)",
      }

      const lowerInput = input.toLowerCase()
      let botResponse =
        "I'm not sure how to respond to that, but feel free to ask me about projects, skills, or how to get in touch!"

      for (const [key, response] of Object.entries(responses)) {
        if (lowerInput.includes(key)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          background: "var(--accent-retro)",
          border: "2px solid var(--text-primary)",
          borderRadius: "50%",
          color: "var(--bg-color)",
          fontSize: "1.8rem",
          fontWeight: "800",
          cursor: "pointer",
          boxShadow: "0 0 20px var(--accent-retro)",
          zIndex: 10001,
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)"
          e.currentTarget.style.boxShadow = "0 0 30px var(--accent-retro)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"
          e.currentTarget.style.boxShadow = "0 0 20px var(--accent-retro)"
        }}
      >
        {isOpen ? "X" : "S"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "380px",
            maxHeight: "500px",
            background: "var(--surface)",
            border: "2px solid var(--border-color)",
            borderRadius: "12px",
            boxShadow: "0 0 30px rgba(255, 77, 0, 0.2)",
            zIndex: 10001,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--accent-retro)",
              color: "var(--bg-color)",
              padding: "15px",
              borderBottom: "2px solid var(--border-color)",
              fontWeight: "700",
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            SKYBOT - Your AI Assistant
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxHeight: "350px",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    background: msg.sender === "user" ? "var(--accent-retro)" : "var(--bg-color)",
                    color: msg.sender === "user" ? "var(--bg-color)" : "var(--text-primary)",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    maxWidth: "80%",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    border: msg.sender === "bot" ? "1px solid var(--border-color)" : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "12px",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                background: "var(--bg-color)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                padding: "10px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "var(--accent-retro)",
                color: "var(--bg-color)",
                border: "1px solid var(--text-primary)",
                padding: "10px 15px",
                borderRadius: "6px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
