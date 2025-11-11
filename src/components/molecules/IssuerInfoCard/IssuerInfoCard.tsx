import { Dispatch, SetStateAction } from 'react'

import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IIssuerInfoCardProps {
  issuer: TCredential['issuer']
  setOpenModal: Dispatch<SetStateAction<'issuer' | 'credential' | null>>
}

const IssuerInfoCard = ({ issuer, setOpenModal }: IIssuerInfoCardProps) => {
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
              <span className="text-white">{issuer.name}</span> •{' '}
              <a href={issuer.url} target="_blank">
                {issuer.url}
              </a>
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
