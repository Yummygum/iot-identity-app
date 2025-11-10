import { AnimatePresence } from 'motion/react'
import { useState } from 'react'

import CredentialDetailsCard from '@/components/molecules/CredentialDetailsCard/CredentialDetailsCard'
import IssuerInfoCard from '@/components/molecules/IssuerInfoCard/IssuerInfoCard'
import DetailsModal from '@/components/organisms/DetailsModal/DetailsModal'
import IssuerModal from '@/components/organisms/IssuerModal/IssuerModal'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IDetailCardsProps {
  credential: TCredential
}

const DetailCards = ({ credential }: IDetailCardsProps) => {
  const [openModal, setOpenModal] = useState<'issuer' | 'credential' | null>(
    null
  )

  return (
    <div className="mt-0 grid gap-10 md:grid-cols-2">
      <CredentialDetailsCard data={credential} setOpenModal={setOpenModal} />

      <IssuerInfoCard issuer={credential.issuer} setOpenModal={setOpenModal} />

      <AnimatePresence mode="wait">
        <IssuerModal
          issuer={credential.issuer}
          key="issuer-modal"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

        <DetailsModal
          credential={credential}
          key="details-modal"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </AnimatePresence>
    </div>
  )
}

export default DetailCards
