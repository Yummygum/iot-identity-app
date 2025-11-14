import { Dispatch, SetStateAction } from 'react'

import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TCredentialIssuer } from '@/lib/schemas/CredentialIssuerSchema'
import { TCredential } from '@/lib/schemas/VerificationResultSchema'

interface IIssuerInfoCardProps {
  issuer: TCredentialIssuer
  setOpenModal: Dispatch<SetStateAction<'issuer' | 'credential' | null>>
  credential: TCredential
}

const IssuerInfoCard = ({
  issuer,
  setOpenModal,
  credential
}: IIssuerInfoCardProps) => {
  const issuerName = issuer.display?.at(0)?.name || 'Issuer'
  const issuerUrl = credential.credentialSubject.achievement?.creator?.id

  return (
    <section className="h-full">
      <Card
        className="flex h-full flex-col"
        contentClassName="grow"
        title="Issuer Info"
      >
        <div className="flex h-full flex-col justify-between gap-6 text-sm">
          <div className="text-foreground/40 flex flex-col gap-6">
            <p>
              Learn more about the organization behind this credential, their
              credentials or authority, and any relevant background that helps
              establish trust.
            </p>

            <p>
              <span className="text-white">{issuerName}</span>
              {issuerUrl && (
                <>
                  {' '}
                  •{' '}
                  <a href={issuerUrl} target="_blank">
                    {issuerUrl}
                  </a>
                </>
              )}
            </p>
          </div>

          <Button
            className="mt-auto flex items-center justify-between"
            onClick={() => setOpenModal('issuer')}
          >
            <span>See more details</span>
            <Icon height={24} name="arrowRight" width={24} />
          </Button>
        </div>
      </Card>
    </section>
  )
}

export default IssuerInfoCard
