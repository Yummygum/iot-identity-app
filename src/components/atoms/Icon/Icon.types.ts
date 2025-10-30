/* eslint-disable no-unused-vars */
import ArrowRight from './icons/arrow-right'
import Check from './icons/check'
import DottedCircle from './icons/dotted-circle'

// Types
export enum IconRotate {
  North = '180deg',
  NorthEast = '-135deg',
  NorthWest = '135deg',
  East = '-90deg',
  South = '0deg',
  SouthEast = '-45deg',
  SouthWest = '45deg',
  West = '90deg'
}

export const iconComponents = {
  check: Check,
  dottedCircle: DottedCircle,
  arrowRight: ArrowRight
}
