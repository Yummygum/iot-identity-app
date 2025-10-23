import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ISectionCredentialOverviewProps {
  isLoading?: boolean
  data: TVerificationResult['credential']
}

const SectionCredentialOverview = ({
  data,
  isLoading
}: ISectionCredentialOverviewProps) => {
  if (isLoading || !data) {
    return null
  }

  return (
    <section className="flex flex-col gap-4 border-b border-black/10 py-8">
      <h2 className="mb-2 text-xl font-semibold">Credential</h2>

      <div className="flex items-center gap-4 text-xl">
        <img
          alt=""
          className="aspect-square h-16 object-cover object-left"
          src={data?.issuer.logoUrl}
        />
        <p className="font-semibold">{data.issuer.name}</p>
      </div>

      <p>{data.name}</p>

      <div>
        <p>Issued at {new Date(data.issuanceDate).toLocaleDateString()}</p>
        <p>Expires at {new Date(data.expiryDate).toLocaleDateString()}</p>
      </div>

      <p className="text-foreground/50 text-sm">
        Please cross-check the information with the values on the LinkedIn
        certificate
      </p>
    </section>
  )
}

export default SectionCredentialOverview
