import { XIcon } from 'lucide-react'

import Icon from '@/components/atoms/Icon'

const ICON_SIZE = 20

interface IVerificationProgressIconProps {
  status: 'not_started' | 'in_progress' | 'success' | 'failed'
}

const VerificationProgressIcon = ({
  status
}: IVerificationProgressIconProps) => {
  const getVerificationIcon = () => {
    switch (status) {
      case 'not_started':
        return (
          <div className="h-7 w-7 rounded-full bg-gray-300">
            <Icon name="dottedCircle" />
          </div>
        )
      case 'in_progress':
        return (
          <div className="h-7 w-7 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        )
      case 'success':
        return (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-(--color-primary) bg-linear-to-bl from-transparent from-50% to-white/20">
            <Icon name="check" />
          </div>
        )
      case 'failed':
        return (
          <div className="bg-red flex h-full w-full items-center justify-center rounded-full">
            <XIcon height={ICON_SIZE} width={ICON_SIZE} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-7 w-7 items-center justify-center">
      {getVerificationIcon()}
    </div>
  )
}

export default VerificationProgressIcon
