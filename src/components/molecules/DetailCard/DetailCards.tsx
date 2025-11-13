import { useState } from 'react'

import CredentialDetailsCard from '@/components/molecules/CredentialDetailsCard/CredentialDetailsCard'
import IssuerInfoCard from '@/components/molecules/IssuerInfoCard/IssuerInfoCard'
import DetailsModal from '@/components/organisms/DetailsModal/DetailsModal'
import IssuerModal from '@/components/organisms/IssuerModal/IssuerModal'
import { TVerificationResult } from '@/lib/schemas/verificationResultSchema'

interface IDetailCardsProps {
  credential: NonNullable<TVerificationResult['credential']>
}

const DetailCards = ({ credential }: IDetailCardsProps) => {
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

      {credential.credentialSubject.achievement?.creator && (
        <>
          <IssuerInfoCard
            issuer={credential.credentialSubject.achievement?.creator}
            setOpenModal={setOpenModal}
          />

          <IssuerModal
            issuer={credential.credentialSubject.achievement?.creator}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </div>
  )
}

export default DetailCards
