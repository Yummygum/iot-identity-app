'use client'

import { useEffect, useState } from 'react'
import { ZodError } from 'zod'

import SectionCredentialOverview from '@/components/organisms/CredentialOverview/SectionCredentialOverview'
import SectionVerificationChecks from '@/components/organisms/SectionVerificationChecks/SectionVerificationChecks'
import SectionVerificationResult from '@/components/organisms/SectionVerificationResult/SectionVerificationResult'
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
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col">
      <h1 className="sr-only">Credential Verification</h1>

      <SectionVerificationResult
        data={result}
        error={error}
        isLoading={isLoading}
      />

      <div className="grid gap-12 py-8 md:grid-cols-2 md:gap-16">
        <SectionCredentialOverview
          data={result?.credential ?? null}
          isLoading={isLoading}
        />

        <SectionVerificationChecks
          checks={result?.checks ?? null}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default VerificationDashboard
