import { cva } from 'class-variance-authority'

import ProgressCircle from '@/components/atoms/ProgressCircle/ProgressCircle'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ISectionVerificationResultProps {
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
        invalid: 'bg-linear-to-br from-red-50 to-red-100',
        loading: 'bg-linear-to-br from-neutral-200 to-neutral-300'
      }
    }
  }
)

const resultBorder = cva([], {
  variants: {
    status: {
      valid: 'stroke-green-500',
      invalid: 'stroke-red-500',
      loading: 'stroke-neutral-500'
    }
  }
})

const SectionVerificationResult = ({
  data,
  isLoading
}: ISectionVerificationResultProps) => {
  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-sm p-4">
        <div className={resultCircle({ status: 'loading' })}>Loading... </div>
      </section>
    )
  }

  const totalChecks = data?.checks.length ?? -1
  const passedChecks =
    data?.checks.filter((check) => check.status === 'passed').length ?? -1

  const passedChecksPercent = (passedChecks / totalChecks) * 100

  return (
    <section className="mx-auto w-full max-w-sm p-4">
      <div className="relative">
        <div
          className={resultCircle({
            status: passedChecks === totalChecks ? 'valid' : 'invalid'
          })}
        >
          <p>
            {passedChecks === totalChecks
              ? 'Credential has been'
              : 'Credential is'}
          </p>
          <p className="text-2xl font-semibold">
            {passedChecks === totalChecks ? 'Validated' : 'Invalid'}
          </p>
          <p>
            {passedChecks} out of {totalChecks} checks passed
          </p>
        </div>

        {passedChecks > 0 && (
          <ProgressCircle
            circleClassName={resultBorder({
              status: passedChecks === totalChecks ? 'valid' : 'invalid'
            })}
            className="absolute top-0 left-0"
            progress={passedChecksPercent}
            size={250}
            strokeWidth={4}
          />
        )}
      </div>
    </section>
  )
}

export default SectionVerificationResult
