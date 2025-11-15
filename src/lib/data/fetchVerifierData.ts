import { ZodError } from 'zod'

import { CredentialIssuerSchema } from '@/lib/schemas/CredentialIssuerSchema'

// eslint-disable-next-line max-statements
const fetchVerifierData = async () => {
  try {
    const res = await fetch(`/.well-known/openid-credential-issuer`, {
      method: 'GET'
    })

    if (!res.ok) {
      throw new Error(
        `Failed to fetch verifier data: ${res.status} ${res.statusText}`
      )
    }

    const data = await res.json()

    const parseRes = CredentialIssuerSchema.parse(data)

    return parseRes
  } catch (err) {
    if (err instanceof ZodError) {
      throw new Error(`Error fetching verifier data: ${err.message}`)
    } else if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}

export default fetchVerifierData
