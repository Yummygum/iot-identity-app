import { X } from 'lucide-react'
import { HTMLAttributes } from 'react'

interface IPopupProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  title: string
  onClose: () => void
}

const Popup = ({ isOpen, onClose, title, ...props }: IPopupProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/10"
          onClick={onClose}
        >
          <div
            className="bg-background flex flex-col gap-2 rounded-md p-6"
            onClick={(event) => event.stopPropagation()}
            {...props}
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
              <X onClick={onClose}>Close</X>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
