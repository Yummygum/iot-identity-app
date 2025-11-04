import { TIconProps } from '@/components/atoms/Icon'

const ArrowRightUp = ({
  width = 16,
  height = 16,
  color = 'currentColor',
  ...props
}: TIconProps) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 16 16"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_156_930)">
        <path
          d="M4 12L12 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.5 4H12V10.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_156_930">
          <rect fill={color} height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowRightUp
