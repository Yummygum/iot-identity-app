import { z } from 'zod'

// ---------------------------------------------
// Shared Sub-Schemas (all optional)
// ---------------------------------------------

const LogoSchema = z
  .object({
    uri: z.string().url().optional(),
    alt_text: z.string().optional()
  })
  .optional()

const DisplayItemSchema = z
  .object({
    name: z.string().optional(),
    locale: z.string().optional(),
    logo: LogoSchema.optional()
  })
  .optional()

const ProofTypesSupportedSchema = z
  .object({
    jwt: z
      .object({
        proof_signing_alg_values_supported: z.array(z.string()).optional()
      })
      .optional()
  })
  .optional()

const CredentialDefinitionSchema = z
  .object({
    type: z.array(z.string()).optional()
  })
  .optional()

const ClaimDisplaySchema = z
  .object({
    name: z.string().optional(),
    locale: z.string().optional()
  })
  .optional()

const ClaimSchema = z
  .object({
    path: z.array(z.string()).optional(),
    mandatory: z.boolean().optional(),
    display: z.array(ClaimDisplaySchema).optional()
  })
  .optional()

// ---------------------------------------------
// Credential Configuration Schema (all optional)
// ---------------------------------------------

const CredentialConfigurationSchema = z
  .object({
    format: z.string().optional(),
    credential_definition: CredentialDefinitionSchema.optional(),
    cryptographic_binding_methods_supported: z.array(z.string()).optional(),
    credential_signing_alg_values_supported: z.array(z.string()).optional(),
    proof_types_supported: ProofTypesSupportedSchema.optional(),
    display: z.array(DisplayItemSchema).optional(),
    claims: z.array(ClaimSchema).optional()
  })
  .optional()

// ---------------------------------------------
// Main Schema (all optional)
// ---------------------------------------------

export const CredentialIssuerSchema = z.object({
  credential_issuer: z.string().url().optional(),
  credential_endpoint: z.string().url().optional(),
  display: z.array(DisplayItemSchema).optional(),
  credential_configurations_supported: z
    .record(z.string(), CredentialConfigurationSchema)
    .optional()
})

export type TCredentialIssuer = z.infer<typeof CredentialIssuerSchema>
export type TCredentialConfiguration = z.infer<
  typeof CredentialConfigurationSchema
>
