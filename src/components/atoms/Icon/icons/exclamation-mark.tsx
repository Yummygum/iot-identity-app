import React from 'react'

import { TIconProps } from '@/components/atoms/Icon'

const ExclamationMark = ({
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
      <path
        d="M16.0004 16.7827V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16.0007 22.5966C16.8034 22.5966 17.4541 21.9458 17.4541 21.1431C17.4541 20.3404 16.8034 19.6897 16.0007 19.6897C15.198 19.6897 14.5472 20.3404 14.5472 21.1431C14.5472 21.9458 15.198 22.5966 16.0007 22.5966Z"
        fill={color}
      />
    </svg>
  )
}

export default ExclamationMark
