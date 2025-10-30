'use client'

import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import SectionCredentialDetails from '@/components/organisms/SectionCredentialDetails/SectionCredentialDetails'
import SectionIssuerInfo from '@/components/organisms/SectionIssuerInfo/SectionIssuerInfo'
import SectionVerificationChecks from '@/components/organisms/SectionVerificationChecks/SectionVerificationChecks'
import SectionVerificationHeader from '@/components/organisms/SectionVerificationHeader/SectionVerificationHeader'
import {
  TVerificationResult,
  verificationResultSchema
} from '@/lib/schemas/verificationResultSchema'

const VerificationDashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<TVerificationResult | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/verify', { method: 'POST' })
        const data = await res.json()

        const parseRes = verificationResultSchema.parse(data)

        setResult(parseRes)
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

    fetchData()
  }, [])

  useEffect(() => {
    if (result !== null || error !== null) {
      setIsLoading(false)
    }
  }, [result, error])

  return (
    <div className="relative min-h-screen">
      {result?.credential?.issuer.colors.primary && (
        <WhiteLabelGradients
          primaryColor={result.credential.issuer.colors.primary}
          secondaryColor={result.credential.issuer.colors.secondary}
        />
      )}

      <div
        className="relative mx-auto flex w-full max-w-7xl flex-col justify-between p-16"
        style={
          {
            '--color-primary': result?.credential?.issuer?.colors?.primary ?? ''
          } as CSSProperties
        }
      >
        <div className="flex">
          <div>
            {result?.credential && (
              <SectionVerificationHeader credential={result.credential} />
            )}

            <SectionVerificationChecks
              checks={result?.checks ?? null}
              isLoading={isLoading}
            />
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 gap-10">
          {result?.credential && (
            <SectionCredentialDetails data={result?.credential} />
          )}

          {result?.credential?.issuer && (
            <SectionIssuerInfo issuer={result?.credential?.issuer} />
          )}
        </div>
      </div>
    </div>
  )
}

export default VerificationDashboard
