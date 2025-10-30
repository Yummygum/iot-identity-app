import { Info } from 'lucide-react'
import { useState } from 'react'

import VerificationProgressIcon from '@/components/atoms/VerificationProgressIcon/VerificationProgressIcon'
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
      <div className="flex items-center gap-6">
        <VerificationProgressIcon
          status={check.status === 'passed' ? 'success' : 'failed'}
        />

        <div className="flex gap-2">
          <p className="font-medium">{check.name}</p>
          {check.description && (
            <button aria-label="More info" onClick={openPopup}>
              <Info className="mr-0 ml-auto" height={12} width={12} />
            </button>
          )}
        </div>
      </div>

      {isOpen && check.description && (
        <Popup isOpen={isOpen} onClose={closePopup} title={check.name}>
          <p>{check.description}</p>
        </Popup>
      )}
    </div>
  )
}

export default VerificationCheck
