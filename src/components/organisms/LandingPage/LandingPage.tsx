import { Dispatch, SetStateAction } from 'react'

import CredentialPreview from '@/components/molecules/CredentialPreview/CredentialPreview'
import LandingHeading from '@/components/molecules/LandingHeading/LandingHeading'
import { VerificationScreenState } from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ILandingPageProps {
  credential: TCredential | null
  setCurrentScreen: Dispatch<SetStateAction<VerificationScreenState>>
}

const LandingPage = ({ credential, setCurrentScreen }: ILandingPageProps) => {
  return (
    <div className="grid h-full grid-rows-[1fr_1fr] items-center lg:grid-cols-2 lg:grid-rows-1 gap-16">
      <LandingHeading setCurrentScreen={setCurrentScreen} />

      {credential && (
        <div className="flex justify-center md:justify-end">
          <CredentialPreview credential={credential} />
        </div>
      )}
    </div>
  )
}

export default LandingPage
