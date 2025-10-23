'use client'

import { useEffect, useState } from 'react'

import CredentialOverview from '@/components/molecules/CredentialOverview/CredentialOverview'
import SectionChecks from '@/components/molecules/SectionChecks/SectionChecks'
import VerificationResult from '@/components/molecules/VerificationResult/VerificationResult'
import {
  TVerificationResult,
  verificationResultSchema
} from '@/lib/schemas/verificationResultSchema'

const SectionVerification = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState<TVerificationResult | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/verify', { method: 'POST' })
        const data = await res.json()

        const parseRes = verificationResultSchema.parse(data)

        setResult(parseRes)
      } catch {
        setResult({
          credential: null,
          verifier: null,
          checks: []
        })
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (result) {
      setIsLoading(false)
    }
  }, [result])

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col p-8">
      <VerificationResult data={result} isLoading={isLoading} />
      <CredentialOverview
        data={result?.credential ?? null}
        isLoading={isLoading}
      />

      {!isLoading && result !== null && result.checks !== null && (
        <SectionChecks checks={result.checks} />
      )}
    </div>
  )
}

export default SectionVerification
