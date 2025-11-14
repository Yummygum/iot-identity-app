import { useState } from 'react'

import CredentialDetailsCard from '@/components/molecules/CredentialDetailsCard/CredentialDetailsCard'
import IssuerInfoCard from '@/components/molecules/IssuerInfoCard/IssuerInfoCard'
import DetailsModal from '@/components/organisms/DetailsModal/DetailsModal'
import IssuerModal from '@/components/organisms/IssuerModal/IssuerModal'
import { TCredentialIssuer } from '@/lib/schemas/CredentialIssuerSchema'
import { TVerificationResult } from '@/lib/schemas/VerificationResultSchema'

interface IDetailCardsProps {
  credential: NonNullable<TVerificationResult['credential']>
  issuer?: TCredentialIssuer | null
}

const DetailCards = ({ credential, issuer }: IDetailCardsProps) => {
  const [openModal, setOpenModal] = useState<'issuer' | 'credential' | null>(
    null
  )

  return (
    <div className="mt-0 grid gap-10 md:grid-cols-2">
      {credential.credentialSubject.achievement && (
        <>
          <CredentialDetailsCard
            data={credential}
            setOpenModal={setOpenModal}
          />

          <DetailsModal
            credential={credential}
            key="details-modal"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}

      {issuer && (
        <>
          <IssuerInfoCard
            credential={credential}
            issuer={issuer}
            setOpenModal={setOpenModal}
          />

          <IssuerModal
            credential={credential}
            issuer={issuer}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </div>
  )
}

export default DetailCards
