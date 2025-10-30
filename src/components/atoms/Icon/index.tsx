import { JSX, SVGProps } from 'react'

import { IconRotate } from '@/components/atoms/Icon/Icon.types'

import { iconComponents } from './Icon.types'

interface ISizeProp {
  size?: number
  width?: never
  height?: never
}

interface IDimensionProp {
  width?: number
  height?: number
  size?: never
}

export type TIconProps = (ISizeProp | IDimensionProp) & {
  color?: string
  className?: string
  direction?: IconRotate
  'aria-label'?: string
} & SVGProps<SVGSVGElement>

export type TIconName = keyof typeof iconComponents

export function isIconName(name: string): name is TIconName {
  return Object.keys(iconComponents).includes(name)
}

const iconElements = ({ size, direction, ...props }: TIconProps) => {
  const result = {} as Record<TIconName, JSX.Element>

  for (const [name, Component] of Object.entries(iconComponents)) {
    if (isIconName(name)) {
      result[name] = (
        <Component
          {...props}
          {...(size && {
            width: size,
            height: size
          })}
          {...(direction && {
            style: {
              transform: `rotate(${direction})`
            }
          })}
        />
      )
    }
  }

  return result
}

const Icon = ({ name, ...props }: TIconProps & { name: TIconName }) => {
  return <>{iconElements(props)[name]}</>
}

export default Icon
