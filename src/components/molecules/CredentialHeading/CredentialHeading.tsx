import React from 'react'

import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ICredentialHeadingProps {
  credential: TCredential
}

const CredentialHeading = ({ credential }: ICredentialHeadingProps) => {
  return (
    <header className="pb-16">
      <>
        <h1 className="mb-6 text-3xl font-medium md:text-5xl">
          {credential.name}
        </h1>

        <h2 className="text-foreground/70 text-lg md:text-xl">
          {credential.credentialSubject?.achievement?.name}{' '}
          <span className="text-foreground/50">
            • {credential.credentialSubject?.achievement?.creator?.name}
          </span>
        </h2>
      </>
    </header>
  )
}

export default CredentialHeading
