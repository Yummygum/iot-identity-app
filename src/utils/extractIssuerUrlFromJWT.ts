import { JWTSchema } from '@/lib/schemas/JWTSchema'
import { decodeJWT } from '@/utils/decodeJWT'

export const extractIssuerUrlFromJWT = (jwt: string): string => {
  const decodedJWT = decodeJWT(jwt, JWTSchema)

  if (!decodedJWT.success) {
    throw new Error(`Failed to decode JWT: ${decodedJWT.error}`)
  }

  const audience = decodeURIComponent(
    decodedJWT.payload.aud.replace(/^did:web:/, '')
  )

  if (audience.startsWith('localhost')) {
    return `http://${audience}`
  }

  return `https://${audience}`
}
