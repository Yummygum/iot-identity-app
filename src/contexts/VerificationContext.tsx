'use client'

import { notFound } from 'next/navigation'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

import fetchIssuerData from '@/lib/data/fetchIssuerData'
import fetchVerificationResult from '@/lib/data/fetchVerificationResult'
import fetchVerifierData from '@/lib/data/fetchVerifierData'
import { TCredentialIssuer } from '@/lib/schemas/CredentialIssuerSchema'
import { TVerificationResult } from '@/lib/schemas/VerificationResultSchema'
import { extractIssuerUrlFromJWT } from '@/utils/extractIssuerUrlFromJWT'

interface VerificationContextType {
  verificationData: TVerificationResult | null
  issuerData: TCredentialIssuer | null
  verifierData: TCredentialIssuer | null
  error: string | null
  isLoading: boolean
}

const VerificationContext = createContext<VerificationContextType | undefined>(
  undefined
)

interface VerificationContextProviderProps {
  children: ReactNode
}

// eslint-disable-next-line max-statements
export const VerificationContextProvider = ({
  children
}: VerificationContextProviderProps) => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [verificationData, setVerificationData] =
    useState<TVerificationResult | null>(null)
  const [issuerData, setIssuerData] = useState<TCredentialIssuer | null>(null)
  const [verifierData, setVerifierData] = useState<TCredentialIssuer | null>(
    null
  )

  const getVerifier = async () => {
    try {
      const res = await fetchVerifierData()

      setVerifierData(res)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const getIssuer = async (issuerUrl: string) => {
    try {
      const res = await fetchIssuerData(issuerUrl)
      setIssuerData(res)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  const getVerificationResult = async (token: string) => {
    try {
      const res = await fetchVerificationResult(token)
      setVerificationData(res)
    } catch (err) {
      if (err instanceof Error) {
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
      return
    }

    const loadData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const issuerUrl = extractIssuerUrlFromJWT(publicCredentialToken)

        await Promise.all([
          getIssuer(issuerUrl),
          getVerifier(),
          getVerificationResult(publicCredentialToken)
        ])
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const value: VerificationContextType = {
    verificationData,
    issuerData,
    verifierData,
    error,
    isLoading
  }

  return (
    <VerificationContext.Provider value={value}>
      {children}
    </VerificationContext.Provider>
  )
}

export const useVerification = () => {
  const context = useContext(VerificationContext)
  if (context === undefined) {
    throw new Error(
      'useVerification must be used within a VerificationContextProvider'
    )
  }

  return context
}
