'use client'

import Image from 'next/image'
import { CSSProperties, useState } from 'react'

import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import LandingPage from '@/components/organisms/LandingPage/LandingPage'
import VerificationPage from '@/components/organisms/VerificationPage/VerificationPage'
import { useVerification } from '@/contexts/VerificationContext'
import { COLORS } from '@/lib/constants'

export enum VerificationScreenState {
  LANDING,
  RESULTS
}

const VerificationDashboard = () => {
  const [currentScreen, setCurrentScreen] = useState<VerificationScreenState>(
    VerificationScreenState.LANDING
  )
  const { verificationData, issuerData } = useVerification()

  return (
    <div className="relative flex min-h-screen">
      <WhiteLabelGradients
        primaryColor={COLORS.primary}
        secondaryColor={COLORS.secondary}
      />

      <div
        className="relative mx-auto flex w-full max-w-7xl grow flex-col justify-between p-8 md:p-16"
        style={
          {
            '--color-primary': COLORS.primary
          } as CSSProperties
        }
      >
        {currentScreen === VerificationScreenState.RESULTS &&
        verificationData &&
        issuerData?.credential_configurations_supported?.['002']?.display ? (
          <VerificationPage
            achievementData={
              issuerData.credential_configurations_supported['002'].display
            }
          />
        ) : (
          <LandingPage
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        )}
      </div>

      {currentScreen === VerificationScreenState.LANDING && (
        <div className="fade-in absolute right-0 bottom-0 -z-10">
          <Image
            alt=""
            height={700}
            src={'/img/background-texture.png'}
            width={700}
          />
        </div>
      )}

      {currentScreen === VerificationScreenState.RESULTS && (
        <div className="fade-in absolute top-0 right-0 -z-10">
          <Image
            alt=""
            height={700}
            src={'/img/background-texture-2.png'}
            width={700}
          />
        </div>
      )}
    </div>
  )
}

export default VerificationDashboard
