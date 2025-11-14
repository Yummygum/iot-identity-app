import React from 'react'

import { ICredentialCheckProps } from '@/components/atoms/CredentialCheck/CredentialCheck'
import ProgressCircle from '@/components/atoms/ProgressCircle/ProgressCircle'
import CredentialChecks from '@/components/molecules/CredentialChecks/CredentialChecks'
import CredentialHeading from '@/components/molecules/CredentialHeading/CredentialHeading'
import DetailCards from '@/components/molecules/DetailCard/DetailCards'
import {
  TCredentialConfiguration,
  TCredentialIssuer
} from '@/lib/schemas/CredentialIssuerSchema'
import { TVerificationResult } from '@/lib/schemas/VerificationResultSchema'

interface IVerificationPageProps {
  verificationData: TVerificationResult
  achievementData: NonNullable<TCredentialConfiguration>['display']
  issuer?: TCredentialIssuer | null
}

const VerificationPage = ({
  verificationData,
  achievementData,
  issuer
}: IVerificationPageProps) => {
  const checks: ICredentialCheckProps['check'][] = [
    {
      ...verificationData.proof,
      name: 'Credential Authentication',
      status: verificationData.proof.status === 'Success' ? 'passed' : 'failed'
    },
    {
      ...verificationData.status,
      name: 'Credential Status',
      status: verificationData.status.status === 'Success' ? 'passed' : 'failed'
    },
    {
      ...verificationData.trust_relation,
      name: 'Ecosystem connection',
      status:
        verificationData.trust_relation.status === 'Success'
          ? 'passed'
          : 'failed'
    },
    {
      ...verificationData.domain_linkage,
      name: 'Issuer domain',
      status:
        verificationData.domain_linkage.status === 'Success'
          ? 'passed'
          : 'failed'
    },
    {
      ...verificationData.linked_vp,
      name: 'Profile check',
      status:
        verificationData.linked_vp.status === 'Success' ? 'passed' : 'failed'
    }
  ]

  return (
    <>
      <div className={'grid items-center gap-16 py-16 md:grid-cols-2'}>
        <div>
          <CredentialHeading
            achievementData={achievementData}
            credential={verificationData.credential}
            issuerData={issuer}
          />

          <CredentialChecks checks={checks} />
        </div>

        <div className="h-full w-full justify-self-end p-4 md:w-auto">
          <ProgressCircle
            className="max-h-96"
            gapSize={12}
            size={500}
            statuses={checks.map((check) => check.status === 'passed')}
            strokeWidth={2}
          />
        </div>
      </div>

      {verificationData.credential && (
        <DetailCards credential={verificationData.credential} issuer={issuer} />
      )}
    </>
  )
}

export default VerificationPage
