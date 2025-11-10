import z from 'zod'

const certificationSchema = z.object({
  name: z.string().min(1, 'certification name cannot be empty'),
  url: z.url('certification url must be a valid URL'),
  description: z.string().min(1, 'certification description cannot be empty'),
  expiresAt: z.iso.datetime().pipe(z.coerce.date()).optional()
})

const trustEcosystemSchema = z.object({
  name: z.string().min(1, 'trust ecosystem name cannot be empty'),
  owner: z.string().min(1, 'trust ecosystem owner cannot be empty'),
  membersAmount: z.number().min(1, 'members amount must be at least 1')
})

export const credentialSchema = z.object({
  name: z.string().min(1, 'name cannot be empty'),
  type: z.string().optional(),
  issuedTo: z.string().min(1, 'issuedTo cannot be empty'),
  dateOfBirth: z.iso.datetime().pipe(z.coerce.date()),
  description: z.string().optional(),
  issuer: z.object({
    name: z.string().min(1, 'issuer name cannot be empty'),
    url: z.url('issuer url must be a valid URL').optional(),
    logoUrl: z.url().optional(),
    colors: z.object({
      primary: z.string().min(1, 'primary color cannot be empty').optional(),
      secondary: z.string().optional()
    }),
    description: z.string().optional(),
    certifications: z.array(certificationSchema),
    trustEcosystems: z.array(trustEcosystemSchema)
  }),
  issuanceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format'
  }),
  expiryDate: z.iso.datetime().pipe(z.coerce.date()),
  verifier: z
    .object({
      name: z.string().min(1, 'verifier name cannot be empty'),
      url: z.url('verifier url must be a valid URL'),
      logoUrl: z.url('verifier logoUrl must be a valid URL').optional()
    })
    .nullable()
})

const checkSchema = z.discriminatedUnion('status', [
  z.object({
    name: z.string().min(1, 'check name cannot be empty'),
    status: z.literal('passed'),
    error: z.undefined()
  }),
  z.object({
    name: z.string().min(1, 'check name cannot be empty'),
    status: z.literal('failed'),
    error: z.string().min(1, 'error message cannot be empty')
  })
])

export const verificationResultSchema = z.object({
  checks: z.array(checkSchema)
})

export type TVerificationResult = z.infer<typeof verificationResultSchema>
export type TCredential = z.infer<typeof credentialSchema>
