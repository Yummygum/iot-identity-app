import z from 'zod'

const credentialSchema = z.object({
  name: z.string().min(1, 'name cannot be empty'),
  type: z.string().optional(),
  issuedTo: z.string().min(1, 'issuedTo cannot be empty'),
  issuer: z.object({
    name: z.string().min(1, 'issuer name cannot be empty'),
    logoUrl: z.url('logoUrl must be a valid URL'),
    colors: z.object({
      primary: z.string().min(1, 'primary color cannot be empty').optional(),
      secondary: z.string().optional()
    })
  }),
  issuanceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format'
  }),
  expiryDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format'
  })
})

const checkSchema = z.discriminatedUnion('status', [
  z.object({
    name: z.string().min(1, 'check name cannot be empty'),
    status: z.literal('passed')
  }),
  z.object({
    name: z.string().min(1, 'check name cannot be empty'),
    status: z.literal('failed'),
    error: z.string().min(1, 'error message cannot be empty')
  })
])

export const verificationResultSchema = z.object({
  verifier: z
    .object({
      name: z.string().min(1, 'verifier name cannot be empty'),
      url: z.url('verifier url must be a valid URL')
    })
    .nullable(),
  credential: credentialSchema.nullable(),
  checks: z.array(checkSchema)
})

export type TVerificationResult = z.infer<typeof verificationResultSchema>
