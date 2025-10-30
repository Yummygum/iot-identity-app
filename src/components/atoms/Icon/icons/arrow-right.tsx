import { TIconProps } from '@/components/atoms/Icon'

const ArrowRight = ({
  width = 32,
  height = 32,
  color = 'currentColor',
  ...props
}: TIconProps) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 32 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_149_584)">
        <path
          d="M5 16H27"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M18 7L27 16L18 25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_149_584">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowRight
