import { motion } from 'motion/react'
import { SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

import Icon from '@/components/atoms/Icon'

const ANIMATION_DURATION = 0.4

interface IStatusCircleProps extends SVGProps<SVGSVGElement> {
  size: number
  statuses: boolean[]
  strokeWidth?: number
  gapSize?: number
}

const DEFAULTS = {
  strokeWidth: 15,
  gapSize: 4,
  segments: 5
}

// eslint-disable-next-line max-statements
const ProgressCircle = ({
  statuses,
  strokeWidth = DEFAULTS.strokeWidth,
  gapSize = DEFAULTS.gapSize,
  className,
  ...props
}: IStatusCircleProps) => {
  const radius = (50 - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  // Calculate segment arc length
  const segmentAngle = 360 / DEFAULTS.segments
  const segmentArc = (circumference * segmentAngle) / 360
  const gapArc = (circumference * gapSize) / 360
  const filledArc = segmentArc - gapArc

  // Ensure we have exactly 5 statuses
  const normalizedStatuses = [...statuses.slice(0, 5)]
  while (normalizedStatuses.length < 5) {
    normalizedStatuses.push(false)
  }

  const rotation = -90 + gapSize / 2

  return (
    <div className={twMerge('relative aspect-square h-full', className)}>
      <svg
        aria-label="Status Circle"
        className={'h-full w-full'}
        height={50}
        style={{
          rotate: `${rotation}deg`,
          transformOrigin: 'center'
        }}
        viewBox={`0 0 50 50`}
        width={50}
        {...props}
      >
        {normalizedStatuses.map((passed, index) => {
          const startAngle = index * segmentAngle
          const offset = (circumference * startAngle) / 360

          return (
            <motion.circle
              animate={{
                strokeDasharray: `${filledArc} ${circumference - filledArc}`,
                stroke: passed ? 'var(--color-primary)' : 'var(--color-red-500)'
              }}
              className={twMerge('fill-transparent')}
              cx={50 / 2}
              cy={50 / 2}
              initial={{
                strokeDasharray: `0 ${circumference}`,
                stroke: 'rgba(255,255,255,0)'
              }}
              key={index}
              r={radius}
              strokeDasharray={`${filledArc} ${circumference - filledArc}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              transition={{
                duration: ANIMATION_DURATION,
                delay: index * (ANIMATION_DURATION + 0),
                ease: 'easeInOut'
              }}
            />
          )
        })}
      </svg>

      <svg
        aria-label="Status Circle"
        className={'absolute top-0 left-0 h-full w-full'}
        height={50}
        style={{
          rotate: `${rotation}deg`,
          transformOrigin: 'center'
        }}
        viewBox={`0 0 50 50`}
        width={50}
        {...props}
      >
        {normalizedStatuses.map((passed, index) => {
          const startAngle = index * segmentAngle
          const offset = (circumference * startAngle) / 360

          return (
            <circle
              className={twMerge(
                'fill-transparent stroke-current text-white/5 transition-colors'
              )}
              cx={50 / 2}
              cy={50 / 2}
              key={index}
              r={radius}
              strokeDasharray={`${filledArc} ${circumference - filledArc}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
            />
          )
        })}
      </svg>

      <svg
        aria-label="Status Circle Shine"
        className={'pointer-events-none absolute top-0 left-0 h-full w-full'}
        height={50}
        style={{
          rotate: `${rotation}deg`,
          transformOrigin: 'center'
        }}
        viewBox={`0 0 50 50`}
        width={50}
        {...props}
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(125 0.5 0.5)"
            id="shineGradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
        </defs>

        {normalizedStatuses.map((_, index) => {
          const startAngle = index * segmentAngle
          const offset = (circumference * startAngle) / 360

          return (
            <circle
              cx={50 / 2}
              cy={50 / 2}
              fill="transparent"
              key={index}
              r={radius}
              stroke="url(#shineGradient)"
              strokeDasharray={`${filledArc} ${circumference - filledArc}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
            />
          )
        })}
      </svg>

      <Icon
        className="absolute top-1/2 left-1/2 h-48 w-48 -translate-1/2"
        name="identificationCard"
      />
    </div>
  )
}

export default ProgressCircle
