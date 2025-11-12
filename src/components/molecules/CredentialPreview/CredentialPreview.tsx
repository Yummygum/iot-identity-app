import Card from '@/components/atoms/Card/Card'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ICredentialPreviewProps {
  credential: TCredential
}

const CredentialPreview = ({ credential }: ICredentialPreviewProps) => {
  return (
    <div className="fade-in fast relative flex w-full max-w-md flex-col gap-2">
      <div className="move-up">
        <Card
          className=""
          title={
            credential.credentialSubject.achievement?.achievementType ?? ''
          }
        >
          <div className="text-foreground/60">
            <p className="mb-6">
              {credential.credentialSubject.achievement?.name}
            </p>
            <p className="text-sm">
              Issuer • {credential.credentialSubject.achievement?.creator?.name}
            </p>
          </div>
        </Card>
      </div>

      {/* TODO: Verifier info? */}
      {/* {credential.verifier?.logoUrl && (
        <div className="move-up top-0 right-0 z-10 opacity-0 delay-700 md:absolute md:translate-x-8 md:-translate-y-8">
          <Card
            className="relative h-12 rounded-2xl p-2.5 shadow-md backdrop-blur-3xl md:bg-[#2D2F31]"
            contentClassName="h-full"
          >
            <div className="h-full">
              <img
                alt={`${credential.verifier.name} logo`}
                className="h-full w-auto"
                src={credential.verifier.logoUrl}
              />
            </div>
          </Card>
        </div>
      )} */}
    </div>
  )
}

export default CredentialPreview
