import { Dispatch, SetStateAction } from 'react'

import CredentialPreview from '@/components/molecules/CredentialPreview/CredentialPreview'
import LandingHeading from '@/components/molecules/LandingHeading/LandingHeading'
import { VerificationScreenState } from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ILandingPageProps {
  credential: TCredential | null
  setCurrentScreen: Dispatch<SetStateAction<VerificationScreenState>>
  currentScreen: VerificationScreenState
}

const LandingPage = ({
  credential,
  setCurrentScreen,
  currentScreen
}: ILandingPageProps) => {
  return (
    <div className="grid h-full grid-rows-[1fr_1fr] items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
      <LandingHeading
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />

      {credential && (
        <div className="flex justify-center md:justify-end">
          <CredentialPreview credential={credential} />
        </div>
      )}
    </div>
  )
}

export default LandingPage
