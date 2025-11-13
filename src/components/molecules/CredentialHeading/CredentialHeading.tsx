import React from 'react'

import { TCredential } from '@/lib/schemas/verificationResultSchema'
import { getIdentificationData } from '@/utils/getIdentificationData'

interface ICredentialHeadingProps {
  credential: TCredential
}

const CredentialHeading = ({ credential }: ICredentialHeadingProps) => {
  const identifierInfo = credential.credentialSubject?.identifier
    ? getIdentificationData(credential.credentialSubject.identifier)
    : null

  return (
    <header className="pb-16">
      <>
        <h1 className="mb-6 text-3xl font-medium md:text-5xl">
          {credential.name}
        </h1>

        <h2 className="text-foreground/70 text-lg md:text-xl">
          {identifierInfo?.name ?? ''}{' '}
          <span className="text-foreground/50">
            • {credential.credentialSubject?.achievement?.creator?.name}
          </span>
        </h2>
      </>
    </header>
  )
}

export default CredentialHeading
