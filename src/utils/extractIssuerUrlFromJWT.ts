import { JWTSchema } from '@/lib/schemas/JWTSchema'
import { decodeJWT } from '@/utils/decodeJWT'

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV

export const extractIssuerUrlFromJWT = (jwt: string): string => {
  const decodedJWT = decodeJWT(jwt, JWTSchema)

  if (!decodedJWT.success) {
    throw new Error(`Failed to decode JWT: ${decodedJWT.error}`)
  }

  const audience = decodeURIComponent(
    decodedJWT.payload.aud.replace(/^did:web:/, '')
  )

  if (nodeEnv === 'development') {
    return `http://${audience}`
  }

  return `https://${audience}`
}
