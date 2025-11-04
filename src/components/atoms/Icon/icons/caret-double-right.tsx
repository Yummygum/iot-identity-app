import { TIconProps } from '@/components/atoms/Icon'

const CaretDoubleRight = ({
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
      <g clipPath="url(#clip0_156_922)">
        <path
          d="M3.5 3L8.5 8L3.5 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 3L13.5 8L8.5 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_156_922">
          <rect fill={color} height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CaretDoubleRight
