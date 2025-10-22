'use client'

import { useEffect, useState } from 'react'

import CredentialOverview from '@/components/molecules/CredentialOverview/CredentialOverview'
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

        setResult(data)
      } catch {
        setResult({
          isValid: false,
          reason: 'Failed to verify credential',
          credential: null
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
    <div className="mx-auto w-full max-w-md">
      <VerificationResult data={result} isLoading={isLoading} />
      <CredentialOverview
        data={result?.credential ?? null}
        isLoading={isLoading}
      />
    </div>
  )
}

export default SectionVerification
