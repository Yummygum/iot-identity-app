import { Check, Info, X } from 'lucide-react'
import { useState } from 'react'

import Popup from '@/components/organisms/Popup/Popup'

interface IVerificationCheckProps {
  check: {
    status: 'passed' | 'failed'
    name: string
    error?: string
    description?: string
  }
}

const VerificationCheck = ({ check }: IVerificationCheckProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const closePopup = () => {
    setIsOpen(false)
  }

  const openPopup = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <p className="font-medium">{check.name}</p>
          {check.description && (
            <button aria-label="More info" onClick={openPopup}>
              <Info className="mr-0 ml-auto" height={12} width={12} />
            </button>
          )}
        </div>
        {check.status === 'passed' ? (
          <Check className="text-green-500" height={16} width={16} />
        ) : (
          <X className="text-red-500" height={16} width={16} />
        )}
      </div>

      {check.status === 'failed' && (
        <p className="text-sm text-red-600">
          {check.error ?? 'Unknown status.'}
        </p>
      )}

      {isOpen && check.description && (
        <Popup isOpen={isOpen} onClose={closePopup} title={check.name}>
          <p>{check.description}</p>
        </Popup>
      )}
    </div>
  )
}

export default VerificationCheck
