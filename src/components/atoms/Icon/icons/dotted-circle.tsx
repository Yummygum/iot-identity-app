import React from 'react'

import { TIconProps } from '@/components/atoms/Icon'

const DottedCircle = ({
  width = 26,
  height = 26,
  color = 'currentColor',
  ...props
}: TIconProps) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 26 26"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="13"
        cy="13"
        r="12"
        stroke={color}
        stroke-dasharray="4 4"
        stroke-linecap="round"
        stroke-width="2"
      />
    </svg>
  )
}

export default DottedCircle
