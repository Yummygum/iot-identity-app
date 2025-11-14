import z from 'zod'

export const JWTSchema = z.object({
  aud: z.string()
})
