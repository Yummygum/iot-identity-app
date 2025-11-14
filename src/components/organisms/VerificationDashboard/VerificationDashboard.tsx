'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import LandingPage from '@/components/organisms/LandingPage/LandingPage'
import VerificationPage from '@/components/organisms/VerificationPage/VerificationPage'
import { COLORS } from '@/lib/constants'
import {
  CredentialIssuerSchema,
  TCredentialIssuer
} from '@/lib/schemas/CredentialIssuerSchema'
import {
  TVerificationResult,
  verificationResultSchema
} from '@/lib/schemas/VerificationResultSchema'
import { extractIssuerUrlFromJWT } from '@/utils/extractIssuerUrlFromJWT'

export enum VerificationScreenState {
  LANDING,
  RESULTS
}

// eslint-disable-next-line max-statements
const VerificationDashboard = () => {
  const [error, setError] = useState<string | null>(null)
  const [currentScreen, setCurrentScreen] = useState<VerificationScreenState>(
    VerificationScreenState.LANDING
  )
  const [verificationData, setVerificationData] =
    useState<TVerificationResult | null>(null)
  const [issuerData, setIssuerData] = useState<TCredentialIssuer | null>(null)
  const [verifierData, setVerifierData] = useState<TCredentialIssuer | null>(
    null
  )

  const fetchVerifierData = async () => {
    try {
      const res = await fetch(`/.well-known/openid-credential-issuer`, {
        method: 'GET'
      })
      const data = await res.json()

      const parseRes = CredentialIssuerSchema.parse(data)

      setVerifierData(parseRes)
    } catch (err) {
      if (err instanceof ZodError) {
        setError('Error fetching verifier data')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const fetchIssuerData = async (issuerUrl: string) => {
    try {
      const res = await fetch(
        `${issuerUrl}/.well-known/openid-credential-issuer`,
        {
          method: 'GET'
        }
      )
      const data = await res.json()

      const parseRes = CredentialIssuerSchema.parse(data)

      setIssuerData(parseRes)
    } catch (err) {
      if (err instanceof ZodError) {
        setError('Error fetching issuer data')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const fetchVerificationResult = async (token: string) => {
    try {
      const res = await fetch(
        `/v0/public-verification?public-credential-token=${token}`
      )
      const data = await res.json()

      const parseRes = verificationResultSchema.parse(data)

      setVerificationData(parseRes)
    } catch (err) {
      if (err instanceof ZodError) {
        setError('Error verifying credential')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const publicCredentialToken = queryParams.get('public-credential-token')

    if (!publicCredentialToken) {
      notFound()
    }

    const issuerUrl = extractIssuerUrlFromJWT(publicCredentialToken)

    fetchIssuerData(issuerUrl)
    fetchVerifierData()
    fetchVerificationResult(publicCredentialToken)
  }, [])

  useEffect(() => {
    if (!error) {
      return
    }

    console.error('Verification Error:', error)
  }, [error])

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
            issuer={issuerData}
            verificationData={verificationData}
          />
        ) : (
          <LandingPage
            achievementData={
              issuerData?.credential_configurations_supported?.['002']?.display
            }
            currentScreen={currentScreen}
            issuerData={issuerData}
            setCurrentScreen={setCurrentScreen}
            verifier={verifierData?.display?.at(0)}
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
