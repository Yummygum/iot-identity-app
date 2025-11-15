import { Dispatch, SetStateAction } from 'react'

import CredentialPreview from '@/components/molecules/CredentialPreview/CredentialPreview'
import LandingHeading from '@/components/molecules/LandingHeading/LandingHeading'
import { VerificationScreenState } from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { useVerification } from '@/contexts/VerificationContext'

interface ILandingPageProps {
  setCurrentScreen: Dispatch<SetStateAction<VerificationScreenState>>
  currentScreen: VerificationScreenState
}

const LandingPage = ({
  setCurrentScreen,
  currentScreen
}: ILandingPageProps) => {
  const { issuerData, verifierData } = useVerification()

  const achievementData =
    issuerData?.credential_configurations_supported?.['002']?.display
  const verifier = verifierData?.display?.at(0)
  return (
    <div className="grid h-full grid-rows-[1fr_1fr] items-center gap-16 lg:grid-cols-2 lg:grid-rows-1">
      <LandingHeading
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />

      {achievementData && (
        <div className="flex justify-center md:justify-end">
          <CredentialPreview
            achievementData={achievementData[0]}
            issuerData={issuerData}
            verifier={verifier}
          />
        </div>
      )}
    </div>
  )
}

export default LandingPage
