import { Dispatch, SetStateAction } from 'react'

import Button from '@/components/atoms/Button/Button'
import Icon from '@/components/atoms/Icon'
import { VerificationScreenState } from '@/components/organisms/VerificationDashboard/VerificationDashboard'

interface IVerificationLandingProps {
  setCurrentScreen: Dispatch<SetStateAction<VerificationScreenState>>
  currentScreen: VerificationScreenState
}

const LandingHeading = ({
  setCurrentScreen,
  currentScreen
}: IVerificationLandingProps) => {
  return (
    <div className="row-start-2 flex flex-col gap-6 lg:row-auto">
      <h1 className="text-2xl font-medium md:text-6xl">
        Verify this credential to check its validity
      </h1>

      <p className="text-foreground/60">
        Verifying a credential is a secure, multi-step process designed to show
        you it&apos;s authenticity and integrity.
      </p>

      <Button
        aria-label="Verify Credential"
        className="disabled:hover-bg-white mt-6 flex max-w-md items-center justify-between bg-white transition-opacity hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/50"
        disabled={currentScreen === VerificationScreenState.RESULTS}
        onClick={() => setCurrentScreen(VerificationScreenState.RESULTS)}
      >
        <span>Verify Credential</span>

        {currentScreen === VerificationScreenState.RESULTS ? (
          <Icon height={28} name="spinner" />
        ) : (
          <Icon height={28} name="arrowRight" />
        )}
      </Button>
    </div>
  )
}

export default LandingHeading
