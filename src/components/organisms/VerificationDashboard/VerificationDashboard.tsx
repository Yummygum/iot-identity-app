'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import LandingPage from '@/components/organisms/LandingPage/LandingPage'
import VerificationPage from '@/components/organisms/VerificationPage/VerificationPage'
import { COLORS } from '@/lib/constants'
import {
  credentialSchema,
  TCredential,
  TVerificationResult,
  verificationResultSchema
} from '@/lib/schemas/verificationResultSchema'

export enum VerificationScreenState {
  LANDING,
  RESULTS
}

const VerificationDashboard = () => {
  const [error, setError] = useState<string | null>(null)
  const [currentScreen, setCurrentScreen] = useState<VerificationScreenState>(
    VerificationScreenState.LANDING
  )
  const [verificationData, setVerificationData] =
    useState<TVerificationResult | null>(null)
  const [credential, setCredential] = useState<TCredential | null>(null)

  const fetchCredential = async () => {
    try {
      const res = await fetch('/api/credential', { method: 'POST' })
      const data = await res.json()

      const parseRes = credentialSchema.parse(data)

      setCredential(parseRes)
    } catch (err) {
      if (err instanceof ZodError) {
        setError('Error fetching credential')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const fetchVerificationResult = async () => {
    try {
      const res = await fetch('/api/verify', { method: 'POST' })
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
    fetchCredential()
    fetchVerificationResult()
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
        credential &&
        verificationData ? (
          <VerificationPage
            credential={credential}
            verificationData={verificationData}
          />
        ) : (
          <LandingPage
            credential={credential}
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
