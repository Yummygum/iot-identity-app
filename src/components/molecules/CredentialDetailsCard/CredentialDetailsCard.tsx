import { Dispatch, SetStateAction } from 'react'

import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TCredential } from '@/lib/schemas/VerificationResultSchema'
import { getIdentificationData } from '@/utils/getIdentificationData'

interface ICredentialDetailsCardProps {
  isLoading?: boolean
  data?: TCredential
  setOpenModal: Dispatch<SetStateAction<'issuer' | 'credential' | null>>
}

const CredentialDetailsCard = ({
  data,
  isLoading,
  setOpenModal
}: ICredentialDetailsCardProps) => {
  if (isLoading) {
    return null
  }

  const identifierInfo = getIdentificationData(
    data?.credentialSubject.identifier
  )

  return (
    <section className="h-full">
      <Card
        className="flex h-full flex-col"
        contentClassName="grow"
        title="Credential Details"
      >
        {data ? (
          <div className="flex h-full flex-col justify-between gap-6 text-sm">
            <div className="text-foreground/40 flex flex-col gap-6">
              <p>
                Reviewing these details helps you understand what the credential
                stands for, who it was awarded to, and under what conditions it
                remains valid.
              </p>

              <p>
                {identifierInfo?.name && (
                  <span className="text-foreground">{identifierInfo.name}</span>
                )}

                {data.expirationDate && (
                  <>
                    {' '}
                    • Valid until{' '}
                    {data.expirationDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </>
                )}
              </p>
            </div>

            <Button
              className="flex items-center justify-between"
              onClick={() => setOpenModal('credential')}
            >
              <span>See more details</span>
              <Icon height={24} name="arrowRight" width={24} />
            </Button>
          </div>
        ) : (
          <p className="text-foreground/60 text-center">
            No credential to show
          </p>
        )}
      </Card>
    </section>
  )
}

export default CredentialDetailsCard
