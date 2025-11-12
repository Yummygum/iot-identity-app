import { TIconProps } from '@/components/atoms/Icon'

const Spinner = ({
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
      <circle
        cx="16"
        cy="16"
        opacity="0.25"
        r="14"
        stroke={color}
        strokeWidth="3"
      />
      <path
        d="M30 16a14 14 0 0 0-14-14"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="0.8s"
          from="0 16 16"
          repeatCount="indefinite"
          to="360 16 16"
          type="rotate"
        />
      </path>
    </svg>
  )
}

export default Spinner
