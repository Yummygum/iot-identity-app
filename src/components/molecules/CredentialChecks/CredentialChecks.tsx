import React from 'react'

import CredentialCheck from '@/components/atoms/CredentialCheck/CredentialCheck'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ICredentialChecksProps {
  checks: TVerificationResult['checks']
}

const CredentialChecks = ({ checks }: ICredentialChecksProps) => {
  return (
    <div className="flex flex-col gap-4">
      {checks?.length ? (
        <div className="flex flex-col gap-6">
          {checks.map((check, index) => (
            <CredentialCheck check={check} key={index} />
          ))}
        </div>
      ) : (
        <p className="text-foreground/60 text-center">No checks to show</p>
      )}
    </div>
  )
}

export default CredentialChecks
