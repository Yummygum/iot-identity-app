import { ReactNode } from 'react'

import Icon from '@/components/atoms/Icon'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  headerAction?: ReactNode
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full'
}

const Modal = ({
  isOpen,
  onClose,
  headerAction,
  children,
  maxWidth = '2xl'
}: IModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full justify-end overflow-hidden p-1">
      <div
        className="fade-in absolute top-0 left-0 h-full w-full bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className={`right-0 flex h-full w-full ${maxWidthClasses[maxWidth]} appear-from-right flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/7 backdrop-blur-[200px]`}
      >
        <header className="top-0 flex items-center justify-between border-b border-white/8 bg-white/4 px-3 py-4 md:pl-10">
          <button
            className="flex aspect-square h-8 cursor-pointer items-center justify-center rounded-sm hover:bg-white/7"
            onClick={onClose}
          >
            <Icon name="toggleSidebar" />
          </button>
          {headerAction}
        </header>
        <div className="max-h-full overflow-y-auto p-4 md:p-10">{children}</div>
      </div>
    </div>
  )
}

export default Modal
