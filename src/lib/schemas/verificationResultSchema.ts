import z from 'zod'

const credentialSchema = z.object({
  name: z.string().min(1, 'name cannot be empty'),
  issuer: z.object({
    name: z.string().min(1, 'issuer name cannot be empty'),
    logoUrl: z.url('logoUrl must be a valid URL')
  }),
  issuanceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format'
  }),
  expiryDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format'
  })
})

export const verificationResultSchema = z.discriminatedUnion('isValid', [
  z.object({
    isValid: z.literal(true),
    verifier: z.object({
      verifiedAt: z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), {
          message: 'Invalid date format'
        })
        .pipe(z.coerce.date()),
      name: z.string().min(1, 'name cannot be empty'),
      url: z.url('url must be a valid URL')
    }),
    credential: credentialSchema
  }),
  z.object({
    isValid: z.literal(false),
    reason: z.string().min(1, 'reason cannot be empty'),
    credential: credentialSchema.nullable()
  })
])

export type TVerificationResult = z.infer<typeof verificationResultSchema>
