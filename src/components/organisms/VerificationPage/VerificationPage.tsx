import React from 'react'

import ProgressCircle from '@/components/atoms/ProgressCircle/ProgressCircle'
import CredentialChecks from '@/components/molecules/CredentialChecks/CredentialChecks'
import CredentialHeading from '@/components/molecules/CredentialHeading/CredentialHeading'
import DetailCards from '@/components/molecules/DetailCard/DetailCards'
import {
  TCredential,
  TVerificationResult
} from '@/lib/schemas/verificationResultSchema'

interface IVerificationPageProps {
  credential: TCredential
  checks: TVerificationResult['checks']
}

const VerificationPage = ({ credential, checks }: IVerificationPageProps) => {
  return (
    <>
      <div className="grid items-center gap-16 py-16 md:grid-cols-2">
        <div>
          <CredentialHeading credential={credential} />

          <CredentialChecks checks={checks} />
        </div>

        <div className="h-full w-full justify-self-end p-4 md:w-auto">
          <ProgressCircle
            className="max-h-96"
            gapSize={10}
            size={500}
            statuses={checks.map((check) => check.status === 'passed')}
            strokeWidth={1.5}
          />
        </div>
      </div>

      <DetailCards credential={credential} />
    </>
  )
}

export default VerificationPage
