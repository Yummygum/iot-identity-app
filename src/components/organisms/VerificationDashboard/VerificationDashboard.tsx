'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import LandingPage from '@/components/organisms/LandingPage/LandingPage'
import VerificationPage from '@/components/organisms/VerificationPage/VerificationPage'
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
  const [checks, setChecks] = useState<TVerificationResult | null>(null)
  const [credential, setCredential] = useState<TCredential | null>(null)

  const fetchCredential = async () => {
    try {
      const res = await fetch('/api/credential', { method: 'POST' })
      const data = await res.json()

      const parseRes = credentialSchema.parse(data.credential)

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

      setChecks(parseRes)
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
      {credential?.issuer.colors.primary && (
        <WhiteLabelGradients
          primaryColor={credential?.issuer.colors.primary}
          secondaryColor={credential?.issuer.colors.secondary}
        />
      )}

      <div
        className="relative mx-auto flex w-full max-w-7xl grow flex-col justify-between p-8 md:p-16"
        style={
          {
            '--color-primary': credential?.issuer?.colors?.primary ?? ''
          } as CSSProperties
        }
      >
        {currentScreen === VerificationScreenState.RESULTS &&
        credential &&
        checks ? (
          <VerificationPage checks={checks.checks} credential={credential} />
        ) : (
          <LandingPage
            credential={credential}
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
    </div>
  )
}

export default VerificationDashboard
