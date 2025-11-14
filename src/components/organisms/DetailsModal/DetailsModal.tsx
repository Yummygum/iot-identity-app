import { Dispatch, SetStateAction } from 'react'
import Markdown from 'react-markdown'

import Icon from '@/components/atoms/Icon'
import InfoItem from '@/components/molecules/InfoItem/InfoItem'
import Modal from '@/components/organisms/Modal/Modal'
import { TCredential } from '@/lib/schemas/VerificationResultSchema'
import { getIdentificationData } from '@/utils/getIdentificationData'

interface IDetailsModalProps {
  credential: TCredential
  openModal: 'credential' | 'issuer' | null
  setOpenModal: Dispatch<SetStateAction<'credential' | 'issuer' | null>>
}

const DetailsModal = ({
  credential,
  openModal,
  setOpenModal
}: IDetailsModalProps) => {
  const identifierInfo = credential.credentialSubject?.identifier
    ? getIdentificationData(credential.credentialSubject.identifier)
    : null

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
        <h2 className="mb-2 text-3xl font-medium">
          {credential.credentialSubject.achievement?.achievementType}
        </h2>
        <p className="text-foreground/60">
          {credential.credentialSubject.achievement?.name}
        </p>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {identifierInfo && (
          <InfoItem
            iconName="user"
            title={identifierInfo.name ?? ''}
            value={identifierInfo.dateOfBirth}
          />
        )}
        {credential.issuanceDate && (
          <InfoItem
            iconName="sealCheck"
            title="Valid"
            value={credential.issuanceDate.toLocaleDateString()}
          />
        )}
        <InfoItem
          iconName="mapPin"
          isLink
          title={credential.credentialSubject.achievement?.creator?.name ?? ''}
          value={credential.credentialSubject.achievement?.creator?.id ?? ''}
        />
      </div>

      {credential.credentialSubject.achievement?.description && (
        <>
          <hr className="border-foreground/5 my-12" />
          <div>
            <h2 className="mb-2 font-medium">Description</h2>
            <div className="text-foreground/70 prose prose-invert whitespace-pre-wrap">
              <Markdown>
                {credential.credentialSubject.achievement?.description}
              </Markdown>
            </div>
          </div>
        </>
      )}

      {credential.credentialSubject.achievement?.criteria.narrative && (
        <>
          <hr className="border-foreground/5 my-12" />
          <div>
            <h2 className="mb-2 font-medium">Criteria</h2>
            <div className="text-foreground/70 prose prose-invert whitespace-pre-wrap">
              <Markdown>
                {credential.credentialSubject.achievement?.criteria.narrative
                  .replace(/\\n/g, '\n')
                  .replace(/\\n/g, ' ')}
              </Markdown>
            </div>
          </div>
        </>
      )}

      {/* <hr className="border-foreground/5 my-12" /> */}

      {/* TODO: Dynamic table */}
      {/* <DegreeTable /> */}
    </Modal>
  )
}

export default DetailsModal
