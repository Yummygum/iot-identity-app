import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ISectionVerificationHeaderProps {
  credential: TCredential
}

const SectionVerificationHeader = ({
  credential
}: ISectionVerificationHeaderProps) => {
  return (
    <header className="pb-16">
      {credential.type ? (
        <>
          <h1 className="mb-4 text-5xl font-medium">{credential.type}</h1>
          <h2 className="text-3xl text-white/70">{credential.name}</h2>
        </>
      ) : (
        <h1>{credential.name}</h1>
      )}
    </header>
  )
}

export default SectionVerificationHeader
