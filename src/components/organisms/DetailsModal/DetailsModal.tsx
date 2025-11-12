import { Dispatch, SetStateAction } from 'react'

import Icon from '@/components/atoms/Icon'
import InfoItem from '@/components/molecules/InfoItem/InfoItem'
import DegreeTable from '@/components/organisms/DegreeTable/DegreeTable'
import Modal from '@/components/organisms/Modal/Modal'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IDetailsModalProps {
  credential: TCredential & {
    issuanceDate?: Date
    expirationDate?: Date
    issuer?: {
      name?: string
    }
    credentialSubject?: {
      name?: string
    }
  }
  openModal: 'credential' | 'issuer' | null
  setOpenModal: Dispatch<SetStateAction<'credential' | 'issuer' | null>>
}

const DetailsModal = ({
  credential,
  openModal,
  setOpenModal
}: IDetailsModalProps) => {
  return (
    <Modal
      headerAction={
        <button
          className="flex items-center gap-1 rounded-md bg-white/15 px-3 py-1.5 transition-colors hover:bg-white/20"
          onClick={() => setOpenModal('issuer')}
        >
          Issuer details
          <Icon name="arrowRightUp" />
        </button>
      }
      isOpen={openModal === 'credential'}
      onClose={() => setOpenModal(null)}
    >
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-medium">{credential.type}</h2>
        <p className="text-foreground/60">{credential?.name}</p>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {credential.credentialSubject?.name && (
          <InfoItem
            iconName="user"
            title={credential.credentialSubject.name}
            value={credential.dateOfBirth.toLocaleDateString()}
          />
        )}
        {credential.expirationDate && (
          <InfoItem
            iconName="sealCheck"
            title="Valid"
            value={credential.expirationDate.toLocaleDateString()}
          />
        )}
        <InfoItem
          iconName="mapPin"
          isLink
          title={credential.issuer.name}
          value={credential.issuer.url}
        />
      </div>

      {credential.description && (
        <>
          <hr className="border-foreground/5 my-12" />
          <div>
            <h2 className="mb-2 font-medium">Description</h2>
            <p className="text-foreground/70 whitespace-pre-wrap">
              {credential.description}
            </p>
          </div>
        </>
      )}

      <hr className="border-foreground/5 my-12" />
      <DegreeTable />
    </Modal>
  )
}

export default DetailsModal
