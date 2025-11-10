'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import ProgressCircle from '@/components/atoms/ProgressCircle/ProgressCircle'
import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import SectionCredentialDetails from '@/components/organisms/SectionCredentialDetails/SectionCredentialDetails'
import SectionIssuerInfo from '@/components/organisms/SectionIssuerInfo/SectionIssuerInfo'
import SectionVerificationChecks from '@/components/organisms/SectionVerificationChecks/SectionVerificationChecks'
import SectionVerificationHeader from '@/components/organisms/SectionVerificationHeader/SectionVerificationHeader'
import VerificationLanding from '@/components/organisms/VerificationLanding/VerificationLanding'
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
  const [isLoading, setIsLoading] = useState(true)
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
    if (checks !== null || error !== null) {
      setIsLoading(false)
    }
  }, [checks, error])

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
        {currentScreen === VerificationScreenState.RESULTS && credential ? (
          <>
            <div className="grid items-center gap-16 py-16 md:grid-cols-2">
              <div>
                {credential && (
                  <SectionVerificationHeader credential={credential} />
                )}

                <SectionVerificationChecks
                  checks={checks?.checks ?? null}
                  isLoading={isLoading}
                />
              </div>

              {checks && (
                <div className="h-full justify-self-end p-4">
                  <ProgressCircle
                    className="max-h-96"
                    gapSize={10}
                    size={500}
                    statuses={checks.checks.map(
                      (check) => check.status === 'passed'
                    )}
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>

            <div className="mt-0 grid gap-10 md:grid-cols-2">
              {credential && <SectionCredentialDetails data={credential} />}

              {credential?.issuer && (
                <SectionIssuerInfo issuer={credential?.issuer} />
              )}
            </div>
          </>
        ) : (
          <VerificationLanding
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
