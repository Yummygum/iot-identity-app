import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface ICredentialOverviewProps {
  isLoading?: boolean
  data: TVerificationResult['credential']
}

const CredentialOverview = ({ data, isLoading }: ICredentialOverviewProps) => {
  if (isLoading || !data) {
    return null
  }

  return (
    <div className="mt-4 flex flex-col gap-8">
      <div className="flex items-center gap-4 text-xl">
        <img
          alt=""
          className="aspect-square h-16 object-cover object-left"
          src={data?.issuer.logoUrl}
        />
        <p>{data.issuer.name}</p>
      </div>

      <p>{data.name}</p>

      <div>
        <p>Issued at {new Date(data.issuanceDate).toLocaleDateString()}</p>
        <p>Expires at {new Date(data.expiryDate).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default CredentialOverview
