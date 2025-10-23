'use client'

import { useEffect, useState } from 'react'

import SectionCredentialOverview from '@/components/organisms/CredentialOverview/SectionCredentialOverview'
import SectionVerificationChecks from '@/components/organisms/SectionVerificationChecks/SectionVerificationChecks'
import SectionVerificationResult from '@/components/organisms/SectionVerificationResult/SectionVerificationResult'
import {
  TVerificationResult,
  verificationResultSchema
} from '@/lib/schemas/verificationResultSchema'

const VerificationDashboard = () => {
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
      <SectionVerificationResult data={result} isLoading={isLoading} />

      <SectionCredentialOverview
        data={result?.credential ?? null}
        isLoading={isLoading}
      />

      {!isLoading && result !== null && result.checks !== null && (
        <SectionVerificationChecks checks={result.checks} />
      )}
    </div>
  )
}

export default VerificationDashboard
