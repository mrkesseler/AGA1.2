import { useRef, useEffect, useState } from "react"

interface TracerPoint {
  x: number
  y: number
  direction: "horizontal" | "vertical"
  speed: number
  gridPosition: { x: number; y: number }
  length: number
}

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const numSquaresX = useRef<number>()
  const numSquaresY = useRef<number>()
  const gridOffset = useRef({ x: 0, y: 0 })
  const tracersRef = useRef<TracerPoint[]>([])
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.background = "#060606"

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    const initializeTracers = () => {
      tracersRef.current = Array.from({ length: 5 }, () => {
        const gridX = Math.floor(Math.random() * (numSquaresX.current || 1))
        const gridY = Math.floor(Math.random() * (numSquaresY.current || 1))
        const isHorizontal = Math.random() > 0.5

        return {
          x: gridX * squareSize,
          y: gridY * squareSize,
          direction: isHorizontal ? "horizontal" : "vertical" as const,
          speed: 2,
          gridPosition: { x: gridX, y: gridY },
          length: 100 + Math.random() * 50 // Randomize tail length between 100-150px
        }
      })
    }

    const updateTracers = () => {
      tracersRef.current.forEach(tracer => {
        if (tracer.direction === "horizontal") {
          tracer.x += tracer.speed
          if (tracer.x >= canvas.width) {
            tracer.x = -tracer.length
            tracer.gridPosition.y = Math.floor(Math.random() * (numSquaresY.current || 1))
            tracer.y = tracer.gridPosition.y * squareSize
          }
        } else {
          tracer.y += tracer.speed
          if (tracer.y >= canvas.height) {
            tracer.y = -tracer.length
            tracer.gridPosition.x = Math.floor(Math.random() * (numSquaresX.current || 1))
            tracer.x = tracer.gridPosition.x * squareSize
          }
        }
      })
    }

    const drawTracers = () => {
      ctx.save()
      
      tracersRef.current.forEach(tracer => {
        // Create gradient for the tracer
        const gradient = ctx.createLinearGradient(
          tracer.direction === "horizontal" ? tracer.x - tracer.length : tracer.x,
          tracer.direction === "horizontal" ? tracer.y : tracer.y - tracer.length,
          tracer.x,
          tracer.y
        )

        // Enhanced gradient stops for a more pronounced effect
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)') // Fully transparent start
        gradient.addColorStop(0.7, 'rgba(0, 128, 255, 0.05)') // Very subtle blue
        gradient.addColorStop(0.85, 'rgba(0, 191, 255, 0.2)') // Brighter blue
        gradient.addColorStop(0.95, 'rgba(255, 255, 255, 0.6)') // Bright white
        gradient.addColorStop(1, 'rgba(255, 255, 255, 1)') // Pure white head

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.beginPath()

        if (tracer.direction === "horizontal") {
          ctx.moveTo(tracer.x - tracer.length, tracer.y)
          ctx.lineTo(tracer.x, tracer.y)
        } else {
          ctx.moveTo(tracer.x, tracer.y - tracer.length)
          ctx.lineTo(tracer.x, tracer.y)
        }

        ctx.stroke()

        // Enhanced glow effect
        const glowSize = 15
        const glowGradient = ctx.createRadialGradient(
          tracer.x,
          tracer.y,
          0,
          tracer.x,
          tracer.y,
          glowSize
        )
        glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
        glowGradient.addColorStop(0.5, 'rgba(0, 191, 255, 0.2)')
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(tracer.x, tracer.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Bright center point
        ctx.beginPath()
        ctx.fillStyle = '#FFFFFF'
        ctx.arc(tracer.x, tracer.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.restore()
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      ctx.lineWidth = 0.5

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      drawTracers()

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2,
      )
      gradient.addColorStop(0, "rgba(6, 6, 6, 0)")
      gradient.addColorStop(1, "#060606")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      updateTracers()
      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize,
      )
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize,
      )

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY })
    }

    const handleMouseLeave = () => {
      setHoveredSquare(null)
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()
    initializeTracers()
    requestRef.current = requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
    />
  )
}