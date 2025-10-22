import { cva } from 'class-variance-authority'

import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface IVerificationResultProps {
  isLoading: boolean
  data: TVerificationResult | null
}

const resultCircle = cva(
  [
    'flex',
    'aspect-square',
    'w-full',
    'flex-col',
    'items-center',
    'justify-center',
    'rounded-full',
    'relative',
    'transition-colors'
  ],
  {
    variants: {
      status: {
        valid: 'bg-linear-to-br from-green-200 to-green-300',
        invalid: 'bg-linear-to-br from-red-200 to-red-300',
        loading: 'bg-linear-to-br from-neutral-200 to-neutral-300'
      }
    }
  }
)

const VerificationResult = ({ data, isLoading }: IVerificationResultProps) => {
  if (isLoading) {
    return (
      <div className={resultCircle({ status: 'loading' })}>Loading... </div>
    )
  }

  const reasonMessagesMap: Map<string, string> = new Map([
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

  return (
    <div
      className={resultCircle({ status: data?.isValid ? 'valid' : 'invalid' })}
    >
      <p>{data?.isValid ? 'Credential has been' : 'Credential is'}</p>
      <p className="text-2xl font-semibold">
        {data?.isValid ? 'Validated' : 'Invalid'}
      </p>

      {data?.isValid ? (
        <div>
          <p>
            By{' '}
            <a className="underline" href={data.verifier.url} target="_blank">
              {data.verifier.name}
            </a>
          </p>
        </div>
      ) : (
        <div>Reason: {reasonMessagesMap.get(data?.reason ?? '')}</div>
      )}
    </div>
  )
}

export default VerificationResult
