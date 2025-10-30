import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ISectionCredentialDetailsProps {
  isLoading?: boolean
  data?: TVerificationResult['credential']
}

const SectionCredentialDetails = ({
  data,
  isLoading
}: ISectionCredentialDetailsProps) => {
  if (isLoading) {
    return null
  }

  return (
    <section>
      <Card title="Credential details">
        {data ? (
          <div className="text-foreground/40 flex flex-col gap-6 text-sm">
            <p>
              Reviewing these details helps you understand what the credential
              stands for, who it was awarded to, and under what conditions it
              remains valid.
            </p>

            <p>
              {data.type ? `${data.type} • ` : ''}
              {data.name}
            </p>

            <Button className="flex items-center justify-between">
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

export default SectionCredentialDetails
