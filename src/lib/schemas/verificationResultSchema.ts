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
  verifier: z
    .object({
      name: z.string().min(1, 'verifier name cannot be empty'),
      url: z.url('verifier url must be a valid URL'),
      logoUrl: z.url('verifier logoUrl must be a valid URL').optional()
    })
    .nullable()
})

export const checkSchema = z.object({
  status: z.enum(['Success', 'Failure', 'Unknown']),
  // Optional error message
  payload: z.string().optional().nullable()
})

export const verificationResultSchema = z.object({
  credential: z
    .object({
      '@context': z.array(z.string()).min(1),
      id: z.string().min(1, 'credential id cannot be empty'),
      issuer: z.object({
        name: z.string().min(1, 'issuer name cannot be empty')
      }),
      type: z.array(z.string()).min(1, 'credential type cannot be empty'),
      issuanceDate: z.iso.datetime().pipe(z.coerce.date()),
      expirationDate: z.iso.datetime().pipe(z.coerce.date()),
      credentialSubject: z.object({
        name: z.string().min(1, 'name cannot be empty').optional()
      })
    })
    .nullable()
    .optional(),
  proof: checkSchema,
  status: checkSchema,
  trust_relation: checkSchema,
  linked_vp: checkSchema,
  domain_linkage: checkSchema
})

export type TVerificationResult = z.infer<typeof verificationResultSchema>
export type TCredential = z.infer<typeof credentialSchema>
export type TCheck = z.infer<typeof checkSchema>
