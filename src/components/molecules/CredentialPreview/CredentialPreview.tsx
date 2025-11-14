import Card from '@/components/atoms/Card/Card'
import {
  TCredentialConfiguration,
  TCredentialIssuer
} from '@/lib/schemas/CredentialIssuerSchema'

interface ICredentialPreviewProps {
  achievementData:
    | NonNullable<NonNullable<TCredentialConfiguration>['display']>[number]
    | null
  verifier?: NonNullable<TCredentialIssuer['display']>[number] | null
  issuerData?: TCredentialIssuer | null
}

const CredentialPreview = ({
  achievementData,
  verifier,
  issuerData
}: ICredentialPreviewProps) => {
  return (
    <div className="fade-in fast relative flex w-full max-w-md flex-col gap-2">
      <div className="move-up">
        <Card className="" title={achievementData?.name ?? ''}>
          <p className="text-foreground/60 mt-4 text-sm">
            Issuer • {issuerData?.display?.at(0)?.name}
          </p>
        </Card>
      </div>

      {verifier && (
        <div className="move-up top-0 right-0 z-10 h-12 w-12 overflow-hidden rounded-full opacity-0 delay-700 md:absolute md:translate-x-1/2 md:-translate-y-1/2">
          <img
            alt={`${verifier.name} logo`}
            className="h-full w-auto"
            src={verifier.logo?.uri}
          />
        </div>
      )}
    </div>
  )
}

export default CredentialPreview
