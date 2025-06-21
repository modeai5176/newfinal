"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface SpotlightTextProps {
  children: ReactNode
  className?: string
}

const SpotlightText = ({ children, className = "" }: SpotlightTextProps) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    const node = textRef.current

    if (node && window.innerWidth > 768) {
      node.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (node) node.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={textRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
        backgroundImage: isHovered
          ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, #ec4899 0%, #8b5cf6 50%, white 80%)`
          : "none",
        backgroundClip: isHovered ? "text" : "none",
        WebkitBackgroundClip: isHovered ? "text" : "none",
        color: isHovered ? "transparent" : "white",
        WebkitTextFillColor: isHovered ? "transparent" : "white",
        transition: "background-position 0.1s ease"
      }}
    >
      {children}
    </div>
  )
}

export default SpotlightText
