import React from 'react'

import { TCredentialConfiguration } from '@/lib/schemas/CredentialIssuerSchema'
import { TCredential } from '@/lib/schemas/VerificationResultSchema'
import { getIdentificationData } from '@/utils/getIdentificationData'

interface ICredentialHeadingProps {
  credential?: TCredential | null
  achievementData: NonNullable<TCredentialConfiguration>['display']
  issuerData?: TCredentialConfiguration | null
}

const CredentialHeading = ({
  credential,
  achievementData,
  issuerData
}: ICredentialHeadingProps) => {
  const identifierInfo = credential?.credentialSubject?.identifier
    ? getIdentificationData(credential.credentialSubject.identifier)
    : null

  const primaryInfo = identifierInfo?.name
  const secondaryInfo = issuerData?.display?.at(0)?.name

  const shouldShowSecondaryInfo =
    Boolean(primaryInfo) &&
    Boolean(secondaryInfo) &&
    primaryInfo !== secondaryInfo

  return (
    <header className="pb-16">
      <>
        <h1 className="mb-6 text-3xl font-medium md:text-5xl">
          {achievementData?.at(0)?.name ?? 'Credential'}
        </h1>

        <h2 className="text-foreground/70 text-lg md:text-xl">
          {primaryInfo ?? secondaryInfo}

          {shouldShowSecondaryInfo && (
            <span className="text-foreground/50"> • {secondaryInfo}</span>
          )}
        </h2>
      </>
    </header>
  )
}

export default CredentialHeading
