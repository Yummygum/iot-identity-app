import { X } from 'lucide-react'
import { HTMLAttributes, useId } from 'react'

interface IPopupProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  title: string
  onClose: () => void
}

const Popup = ({ isOpen, onClose, title, children, ...props }: IPopupProps) => {
  const headingId = useId()

  return (
    <>
      {isOpen && (
        <div
          aria-labelledby={headingId}
          aria-modal="true"
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={onClose}
          role="dialog"
        >
          <div
            className="bg-background flex max-w-lg flex-col gap-2 rounded-md p-6"
            onClick={(event) => event.stopPropagation()}
            {...props}
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold" id={headingId}>
                {title}
              </h2>
              <button aria-label="Close popup" onClick={onClose}>
                <X />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
