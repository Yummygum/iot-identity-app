"use client"

import React, { useEffect, useRef } from 'react'

interface WhiteLabelGradientsProps {
  primaryColor: string
  secondaryColor?: string
}

const BLUR_AMOUNT = 150

const WhiteLabelGradients: React.FC<WhiteLabelGradientsProps> = ({
  primaryColor,
  secondaryColor
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // eslint-disable-next-line max-statements
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    
    if (!canvas || !ctx) {
      return
    }

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
    ctx.filter = `blur(${BLUR_AMOUNT}px)`

    // ---------- Blob 1: Top-left ----------
    ctx.save()
    ctx.globalAlpha = 0.9
    ctx.fillStyle = primaryColor
    ctx.translate(0, 0)
    const blob1XScale = 0.9
    const blob1YScale = 1.3
    ctx.scale(blob1XScale, blob1YScale)
    const path1 = new Path2D(
      'M537.5 95C287.323 66.2512 221.358 85.9336 162.359 156.851C100.027 156.851 -250.038 257.472 -116 28C71.5 -293 583.005 -17.512 890 1.50002C1196.99 20.512 952.148 142.649 537.5 95Z'
    )
    ctx.fill(path1)
    ctx.restore()

    // ---------- Blob 2: Mid-left ----------
    ctx.save()
    ctx.globalAlpha = 0.4
    ctx.fillStyle = secondaryColor ?? primaryColor
    ctx.translate(0, 20)
    const blob2Scale = {
      x: 1,
      y: 1.2
    }
    ctx.scale(blob2Scale.x, blob2Scale.y)
    const path2 = new Path2D(
      'M-16.4989 97.9636C100.862 168.144 145.954 82.1046 153.829 30.3121C179.788 20.0017 253.834 34.7005 342.348 175.979C452.99 352.577 103.499 268.982 -28.827 308.494C-161.153 348.005 -163.2 10.2376 -16.4989 97.9636Z'
    )
    ctx.fill(path2)
    ctx.restore()

    // ---------- Blob 3: Bottom-right ----------
    ctx.save()
    ctx.globalAlpha = 0.12
    ctx.fillStyle = primaryColor
    const blob3Scale = 0.7
    const blob3Width = 1117 * blob3Scale
    const blob3Height = 519 * blob3Scale
    ctx.translate(width - blob3Width - 50, height - blob3Height + 70)
    ctx.scale(blob3Scale, blob3Scale)
    const path3 = new Path2D(
      'M1370.33 1021.19C1081.33 755.988 825.329 910.687 733.457 1021.19C636.394 1021.19 416.108 921.032 311.467 520.412C180.666 19.6361 1202.16 524.643 1680.21 554.267C2158.26 583.89 1731.6 1352.69 1370.33 1021.19Z'
    )
    ctx.fill(path3)
    ctx.restore()

    ctx.filter = 'none'
  }, [primaryColor, secondaryColor])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        className="absolute inset-0 w-full h-full object-cover fade-in"
        height={1080}
        ref={canvasRef}
        width={1328}
      />
    </div>
  )
}

export default WhiteLabelGradients