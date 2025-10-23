import { SVGProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProgressCircleProps extends SVGProps<SVGSVGElement> {
  size: number
  progress: number
  strokeWidth?: number
  circleClassName?: string
  isAnimated?: boolean
}

const ProgressCircle = ({
  size,
  progress,
  strokeWidth = 15,
  className,
  circleClassName,
  isAnimated = true,
  ...props
}: IProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const targetDash = (progress * circumference) / 100
  const [dash, setDash] = useState(isAnimated ? 0 : targetDash)

  useEffect(() => {
    if (!isAnimated) {
      setDash(targetDash)
      return
    }

    const animationDuration = 2000
    const frameRate = 1000 / 60
    const totalFrames = Math.round(animationDuration / frameRate)
    let currentFrame = 0

    const animate = () => {
      currentFrame += 1
      const progressRatio = currentFrame / totalFrames
      const easedProgress = 1 - (1 - progressRatio) ** 3

      setDash(easedProgress * targetDash)

      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [targetDash, isAnimated])

  return (
    <svg
      className={twMerge('h-full w-full -rotate-90', className)}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...props}
    >
      <circle
        className={twMerge('h-full w-full fill-transparent', circleClassName)}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default ProgressCircle
