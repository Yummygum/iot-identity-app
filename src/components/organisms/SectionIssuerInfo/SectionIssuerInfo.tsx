import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ISectionIssuerInfoProps {
  issuer: NonNullable<TVerificationResult['credential']>['issuer']
}

const SectionIssuerInfo = ({ issuer }: ISectionIssuerInfoProps) => {
  return (
    <section>
      <Card title="Issuer Info">
        <div className="text-foreground/40 flex flex-col gap-6 text-sm">
          <p>
            Learn more about the organization behind this credential, their
            credentials or authority, and any relevant background that helps
            establish trust.
          </p>

          <p>Issuer • {issuer.name}</p>

          <Button className="flex items-center justify-between">
            <span>See more details</span>
            <Icon height={24} name="arrowRight" width={24} />
          </Button>
        </div>
      </Card>
    </section>
  )
}

export default SectionIssuerInfo
