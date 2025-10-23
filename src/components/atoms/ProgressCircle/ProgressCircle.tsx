import { SVGProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProgressCircleProps extends SVGProps<SVGSVGElement> {
  size: number
  progress: number
  strokeWidth?: number
  circleClassName?: string
  isAnimated?: boolean
  animationDuration?: number
  easingFunction?: (_ratio: number) => number
  strokeLineCap?: 'butt' | 'round' | 'square'
}

const DEFAULTS = {
  duration: 1000,
  strokeWidth: 15,
  isAnimated: true,
  easingFunction: (ratio: number) => 1 - (1 - ratio) ** 3
}

const ProgressCircle = ({
  size,
  progress,
  strokeWidth = DEFAULTS.strokeWidth,
  className,
  circleClassName,
  isAnimated = DEFAULTS.isAnimated,
  animationDuration = DEFAULTS.duration,
  easingFunction = DEFAULTS.easingFunction,
  strokeLineCap = 'round',
  ...props
}: IProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const clampedProgress = Math.min(Math.max(progress, 0), 100)
  const targetDash = (clampedProgress * circumference) / 100
  const [dash, setDash] = useState(isAnimated ? 0 : targetDash)

  useEffect(() => {
    if (!isAnimated) {
      setDash(targetDash)
      return
    }

    let animationFrameId: number

    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progressRatio = Math.min(elapsed / animationDuration, 1)
      const easedProgress = easingFunction(progressRatio)
      setDash(easedProgress * targetDash)

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [targetDash, isAnimated, animationDuration, easingFunction])

  return (
    <svg
      aria-label="Progress Circle"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      aria-valuetext={`${progress}%`}
      className={twMerge('h-full w-full -rotate-90', className)}
      height={size}
      role="progressbar"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...props}
    >
      <circle
        className={twMerge('fill-transparent stroke-current', circleClassName)}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap={strokeLineCap}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default ProgressCircle
