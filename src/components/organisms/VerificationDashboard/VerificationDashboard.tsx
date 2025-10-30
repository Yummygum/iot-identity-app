'use client'

import { CSSProperties, useEffect, useState } from 'react'
import { ZodError } from 'zod'

import SectionCredentialDetails from '@/components/organisms/SectionCredentialDetails/SectionCredentialDetails'
import SectionIssuerInfo from '@/components/organisms/SectionIssuerInfo/SectionIssuerInfo'
import SectionVerificationChecks from '@/components/organisms/SectionVerificationChecks/SectionVerificationChecks'
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
    <div
      className="mx-auto flex w-full max-w-7xl flex-col justify-between"
      style={
        {
          '--color-primary': result?.credential?.issuer?.colors?.primary ?? ''
        } as CSSProperties
      }
    >
      <div className="flex">
        <SectionVerificationChecks
          checks={result?.checks ?? null}
          isLoading={isLoading}
        />
      </div>

      <div className="mt-32 grid grid-cols-2 gap-10">
        <SectionCredentialDetails data={result?.credential} />

        {result?.credential?.issuer && (
          <SectionIssuerInfo issuer={result?.credential?.issuer} />
        )}
      </div>
    </div>
  )
}

export default VerificationDashboard
