import { Dispatch, SetStateAction } from 'react'

import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import { VerificationScreenState } from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IVerificationLandingProps {
  credential: TCredential | null
  setCurrentScreen: Dispatch<SetStateAction<VerificationScreenState>>
}

const VerificationLanding = ({
  credential,
  setCurrentScreen
}: IVerificationLandingProps) => {
  return (
    <div className="grid h-full grid-cols-2 items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-medium">
          Verify this credential to check its validity
        </h1>
        <p className="text-foreground/60">
          Verifying a credential is a secure, multi-step process designed to
          show you it&apos;s authenticity and integrity.
        </p>

        <Button
          className="mt-6 flex max-w-md items-center justify-between bg-white"
          onClick={() => setCurrentScreen(VerificationScreenState.RESULTS)}
        >
          <span>Verify Credential</span>
          <Icon height={28} name="arrowRight" />
        </Button>
      </div>

      <div className="flex justify-end">
        <div className="relative w-full max-w-md">
          {credential?.verifier?.logoUrl && (
            <Card
              className="absolute top-0 right-0 h-15 translate-x-8 -translate-y-8 rounded-2xl border-white/15 bg-[#323435]"
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
          )}

          <Card className="" title="Bachelor's degree">
            <div className="text-foreground/60">
              <p className="mb-6">{credential?.name}</p>

              <p className="text-sm">Issuer • {credential?.issuer.name}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default VerificationLanding
