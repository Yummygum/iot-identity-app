import { twMerge } from 'tailwind-merge'

import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface IVerificationResultProps {
  isLoading: boolean
  data: TVerificationResult | null
}

const VerificationResult = ({ data, isLoading }: IVerificationResultProps) => {
  if (isLoading) {
    return (
      <div className="flex aspect-square w-full flex-col items-center justify-center rounded-full bg-neutral-200">
        Loading...{' '}
      </div>
    )
  }

  return (
    <div
      className={twMerge(
        'flex aspect-square w-full flex-col items-center justify-center rounded-full',
        data?.isValid ? 'bg-green-200' : 'bg-red-200'
      )}
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
        <div>Reason: {data?.reason}</div>
      )}
    </div>
  )
}

export default VerificationResult
