import { TIdentifier } from '@/lib/schemas/VerificationResultSchema'

const getIdentificationData = (identifier?: TIdentifier[] | null) => {
  if (!identifier) {
    return null
  }

  const identifierInfo = {
    name: identifier.find((id) => id.identityType === 'name')?.identityHash,
    dateOfBirth: identifier.find((id) => id.identityType === 'ext:dateofBirth')
      ?.identityHash
  }

  return identifierInfo
}

export { getIdentificationData }
