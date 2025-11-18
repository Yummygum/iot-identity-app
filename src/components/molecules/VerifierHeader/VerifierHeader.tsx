import React from 'react'

import { useVerification } from '@/contexts/VerificationContext'

const VerifierHeader = () => {
  const { verifierData } = useVerification()

  const verifierName = verifierData?.display?.at(0)?.name

  if (!verifierName) {
    return null
  }

  return (
    <div className="fixed top-0 py-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-foreground/40 fade-in flex items-center gap-4">
          Verified by{' '}
          <span className="text-2xl font-medium text-white">
            {verifierName}
          </span>
        </p>
      </div>
    </div>
  )
}

export default VerifierHeader
