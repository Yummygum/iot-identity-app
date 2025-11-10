import React from 'react'

import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ICredentialHeadingProps {
  credential: TCredential
}

const CredentialHeading = ({ credential }: ICredentialHeadingProps) => {
  return (
    <header className="pb-16">
      {credential.type ? (
        <>
          <h1 className="mb-6 text-5xl font-medium">{credential.name}</h1>
          <h2 className="text-foreground/70 text-xl">
            {credential.issuedTo}{' '}
            <span className="text-foreground/50">
              • {credential.issuer.name}
            </span>
          </h2>
        </>
      ) : (
        <h1>{credential.name}</h1>
      )}
    </header>
  )
}

export default CredentialHeading
