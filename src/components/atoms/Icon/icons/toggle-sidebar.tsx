import React, { useId } from 'react'

import { TIconProps } from '@/components/atoms/Icon'

const ToggleSidebar = ({
  width = 20,
  height = 20,
  color = 'currentColor',
  ...props
}: TIconProps) => {
  const clipPathId = useId()

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 20 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M6.875 3.75V16.25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16.875 3.75H3.125C2.77982 3.75 2.5 4.02982 2.5 4.375V15.625C2.5 15.9702 2.77982 16.25 3.125 16.25H16.875C17.2202 16.25 17.5 15.9702 17.5 15.625V4.375C17.5 4.02982 17.2202 3.75 16.875 3.75Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <rect fill={color} height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ToggleSidebar
