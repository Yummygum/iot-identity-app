import { z, ZodObject } from 'zod'

type DecodeJWTReturn<T extends ZodObject> =
  | {
      success: true
      payload: z.infer<T>
    }
  | {
      success: false
      error: string
    }

export function decodeJWT<T extends ZodObject>(
  token: string,
  schema: T
): DecodeJWTReturn<T> {
  try {
    const segment = extractPayloadSegment(token)
    const payloadObj = decodeBase64UrlToObject(segment)
    const validated = validatePayload(payloadObj, schema)

    return { success: true, payload: validated }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

function decodeBase64UrlToObject(segment: string): unknown {
  const base64 = segment.replace(/-/g, '+').replace(/_/g, '/')

  const binary = atob(base64)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  const jsonString = new TextDecoder().decode(bytes)

  return JSON.parse(jsonString)
}

function extractPayloadSegment(token: string): string {
  const segment = token.split('.').at(1)
  if (!segment) {
    throw new Error('Invalid JWT token')
  }

  return segment
}

function validatePayload<T extends ZodObject>(
  obj: unknown,
  schema: T
): z.infer<T> {
  const parsed = schema.safeParse(obj)
  if (!parsed.success) {
    throw new Error('JWT payload does not match the expected schema')
  }

  return parsed.data
}
