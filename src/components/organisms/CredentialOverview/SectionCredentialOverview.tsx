import LabeledValue from '@/components/atoms/LabeledValue/LabeledValue'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ISectionCredentialOverviewProps {
  isLoading?: boolean
  data?: TVerificationResult['credential']
}

const SectionCredentialOverview = ({
  data,
  isLoading
}: ISectionCredentialOverviewProps) => {
  if (isLoading) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Credential</h2>

      {data ? (
        <>
          <div className="flex items-center gap-4 text-xl">
            {/* eslint-disable @next/next/no-img-element */}
            <img
              alt={data?.issuer.name}
              className="aspect-square h-12 object-cover object-left"
              src={data?.issuer.logoUrl}
            />
            <p className="font-semibold">{data.issuer.name}</p>
          </div>

          <div className="grid max-w-md grid-cols-2 gap-2 py-4">
            <LabeledValue
              className="col-span-full"
              label="Issued to"
              value={data.name}
            />
            <LabeledValue
              label="Issued at"
              value={new Date(data.issuanceDate).toLocaleDateString()}
            />
            <LabeledValue
              label="Expires at"
              value={new Date(data.expiryDate).toLocaleDateString()}
            />
          </div>

          <p className="text-foreground/60 text-sm">
            Please cross-check the information with the values on the LinkedIn
            certificate
          </p>
        </>
      ) : (
        <p className="text-foreground/50">No credential to show</p>
      )}
    </section>
  )
}

export default SectionCredentialOverview
