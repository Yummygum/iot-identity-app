import VerificationCheck from '@/components/molecules/VerificationCheck/VerificationCheck'

interface ISectionVerificationChecksProps {
  checks: {
    name: string
    status: 'passed' | 'failed'
    error?: string
  }[]
}

const SectionVerificationChecks = ({
  checks
}: ISectionVerificationChecksProps) => {
  // Maps error codes to user-friendly messages
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

  // Maps check names to descriptions
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
      <h2 className="py-8 text-xl font-semibold">Checks</h2>

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

export default SectionVerificationChecks
