import z from 'zod'

const checkSchema = z.object({
  status: z.enum(['Success', 'Failure', 'Unknown']),
  // This contains an optional error message for Failure or Unknown statuses
  payload: z.unknown()
})

const imageSchema = z.object({
  type: z.literal('Image'),
  id: z.url('image id must be a valid URL').optional().nullable()
})

const creatorSchema = z.object({
  id: z.string().optional().nullable(),
  name: z.string().min(1, 'creator name cannot be empty').optional().nullable(),
  description: z.string().optional().nullable(),
  image: imageSchema.optional().nullable()
})

const identifierSchema = z.object({
  type: z.string().min(1, 'identifier type cannot be empty'),
  hashed: z.boolean(),
  identityType: z.string().min(1, 'identity type cannot be empty'),
  identityHash: z.string().min(1, 'identity hash cannot be empty')
})

const achievementSchema = z.object({
  achievementType: z
    .string()
    .min(1, 'achievement type cannot be empty')
    .optional()
    .nullable(),
  name: z
    .string()
    .min(1, 'achievement name cannot be empty')
    .optional()
    .nullable(),
  description: z.string().optional().nullable(),
  creator: creatorSchema.optional().nullable(),
  criteria: z.object({
    type: z
      .string()
      .min(1, 'criteria type cannot be empty')
      .optional()
      .nullable(),
    narrative: z.string().optional().nullable()
  })
})

export const credentialSchema = z.object({
  '@context': z.array(z.string()).min(1),
  type: z.array(z.string()).min(1, 'credential type cannot be empty'),
  name: z.string().min(1, 'credential name cannot be empty').optional(),
  date_of_birth: z.iso.datetime().pipe(z.coerce.date()).optional(),
  issuanceDate: z.iso.datetime().pipe(z.coerce.date()).nullable().optional(),
  expirationDate: z.iso.datetime().pipe(z.coerce.date()).nullable().optional(),
  credentialSubject: z.object({
    achievement: achievementSchema.optional().nullable(),
    identifier: z.array(identifierSchema).optional().nullable()
  })
})

export const verificationResultSchema = z.object({
  credential: credentialSchema.nullable().optional(),
  proof: checkSchema,
  status: checkSchema,
  trust_relation: z.object({
    status: z.enum(['Success', 'Failure', 'Unknown']),
    payload: z
      .union([
        z.string(),
        z.object({
          name: z.string().optional().nullable(),
          domain: z.url().optional().nullable(),
          image: z.string().optional().nullable()
        })
      ])
      .nullable()
      .optional()
  }),
  linked_vp: checkSchema,
  domain_linkage: checkSchema
})

export type TVerificationResult = z.infer<typeof verificationResultSchema>
export type TCredential = z.infer<typeof credentialSchema>
export type TCheck = z.infer<typeof checkSchema>
export type TIssuer = z.infer<typeof creatorSchema>
export type TIdentifier = z.infer<typeof identifierSchema>
