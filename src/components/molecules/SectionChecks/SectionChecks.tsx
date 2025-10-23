import VerificationCheck from '@/components/atoms/VerificationCheck'

interface ISectionChecksProps {
  checks: {
    name: string
    status: 'passed' | 'failed'
    error?: string
  }[]
}

const SectionChecks = ({ checks }: ISectionChecksProps) => {
  const errorMessagesMap: Map<string, string> = new Map([
    ['INVALID_SIGNATURE', 'The signature of the credential is invalid.'],
    ['EXPIRED_CREDENTIAL', 'The credential has expired.'],
    ['REVOKED_CREDENTIAL', 'The credential has been revoked.'],
    ['SUSPENDED_CREDENTIAL', 'The credential is suspended.'],
    ['NOT_VALID_YET', 'The credential is not valid yet.'],
    [
      'ORGANIZATION_CANT_BE_VERIFIED',
      "The issuing organization's details can't be verified."
    ]
  ])

  const checkDescriptionsMap: Map<string, string> = new Map([
    [
      'Credential Validation',
      'Checks if the credential is properly signed and issued by a trusted authority.'
    ],
    [
      'Credential Status',
      'Verifies whether the credential is active, revoked, or expired.'
    ]
  ])

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Checks</h2>

      <div className="flex flex-col gap-2">
        {checks.map((check, index) => (
          <VerificationCheck
            check={{
              ...check,
              description: checkDescriptionsMap.get(check.name),
              error: check.error ? errorMessagesMap.get(check.error) : undefined
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionChecks
