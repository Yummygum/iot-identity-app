import { ZodError } from 'zod'

import { VerificationResultSchema } from '@/lib/schemas/VerificationResultSchema'
import constructAPIUrl from '@/utils/constructAPIUrl'

// eslint-disable-next-line max-statements
const fetchVerificationResult = async (token: string) => {
  try {
    const res = await fetch(constructAPIUrl(`/v0/public-verification?public-credential-token=${token}`))

    if (!res.ok) {
      throw new Error(
        `Failed to verify credential: ${res.status} ${res.statusText}`
      )
    }

    const data = await res.json()

    const parseRes = VerificationResultSchema.parse(data)

    return parseRes
  } catch (err) {
    if (err instanceof ZodError) {
      throw new Error(`Error verifying credential: ${err.message}`)
    } else if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}

export default fetchVerificationResult
