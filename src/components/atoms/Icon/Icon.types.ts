import ArrowRight from './icons/arrow-right'
import ArrowRightUp from './icons/arrow-right-up'
import Calendar from './icons/calendar'
import CaretDoubleRight from './icons/caret-double-right'
import Check from './icons/check'
import DottedCircle from './icons/dotted-circle'
import MapPin from './icons/map-pin'

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
  arrowRightUp: ArrowRightUp,
  check: Check,
  dottedCircle: DottedCircle,
  arrowRight: ArrowRight,
  caretDoubleRight: CaretDoubleRight,
  calendar: Calendar,
  mapPin: MapPin
}
