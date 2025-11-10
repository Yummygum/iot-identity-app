import { Dispatch, SetStateAction } from 'react'

import Icon from '@/components/atoms/Icon'
import Modal from '@/components/organisms/Modal/Modal'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IIssuerModalProps {
  issuer: TCredential['issuer']
  openModal: 'credential' | 'issuer' | null
  setOpenModal: Dispatch<SetStateAction<'credential' | 'issuer' | null>>
}

const IssuerModal = ({
  issuer,
  openModal,
  setOpenModal
}: IIssuerModalProps) => {
  return (
    <Modal
      headerAction={
        <button
          className="flex items-center gap-1 rounded-md bg-white/15 px-3 py-1.5 transition-colors hover:bg-white/20"
          onClick={() => setOpenModal('credential')}
        >
          Credential details
          <Icon name="arrowRightUp" />
        </button>
      }
      isOpen={openModal === 'issuer'}
      onClose={() => setOpenModal(null)}
    >
      <div className="flex gap-5">
        {issuer.logoUrl && (
          <img
            alt={`${issuer.name} logo`}
            className="h-16 w-16 rounded-lg"
            src={issuer.logoUrl}
          />
        )}

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium">{issuer.name}</h2>

          {issuer.url && (
            <a
              className="text-foreground/70 text-sm"
              href={issuer.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {issuer.url}
            </a>
          )}
        </div>
      </div>

      {issuer.description && (
        <p className="mt-6 whitespace-pre-wrap">{issuer.description}</p>
      )}

      <hr className="border-foreground/5 my-10" />

      {issuer.certifications && (
        <>
          <h3 className="mb-4 text-xl font-medium">Public Certifications</h3>

          <div>
            {issuer.certifications.map((certification, index) => (
              <div className="flex flex-col gap-2 px-2 py-5" key={index}>
                <div className="flex justify-between">
                  <h4 className="font-medium">{certification.name}</h4>

                  {certification.expiresAt && (
                    <div className="flex items-center gap-2">
                      <Icon name="sealCheck" />
                      <span className="text-sm">
                        {certification.expiresAt.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-foreground/50 justify-between text-sm md:flex">
                  {certification.description && (
                    <p>{certification.description}</p>
                  )}

                  {certification.url && (
                    <a
                      href={certification.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {certification.url}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="border-foreground/5 my-10" />
        </>
      )}

      {issuer.trustEcosystems.length > 0 && (
        <>
          <h3 className="mb-4 text-xl font-medium">Trust Ecosystems</h3>

          <div>
            {issuer.trustEcosystems.map((trustEcosystem, index) => (
              <div
                className="items-center justify-between gap-2 px-2 py-5 md:flex"
                key={index}
              >
                <div className="flex flex-col gap-2">
                  <h4 className="font-medium">{trustEcosystem.name}</h4>
                  <p className="text-foreground/50 text-sm">
                    By {trustEcosystem.owner}
                  </p>
                </div>

                <p className="text-foreground/50 text-sm">
                  {trustEcosystem.membersAmount} members
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </Modal>
  )
}

export default IssuerModal
