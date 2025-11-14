import { Dispatch, SetStateAction } from 'react'
import Markdown from 'react-markdown'

import Icon from '@/components/atoms/Icon'
import Modal from '@/components/organisms/Modal/Modal'
import { TCredentialIssuer } from '@/lib/schemas/CredentialIssuerSchema'
import { TCredential } from '@/lib/schemas/VerificationResultSchema'

interface IIssuerModalProps {
  issuer: TCredentialIssuer
  openModal: 'credential' | 'issuer' | null
  setOpenModal: Dispatch<SetStateAction<'credential' | 'issuer' | null>>
  credential?: TCredential | null
}

const IssuerModal = ({
  issuer,
  credential,
  openModal,
  setOpenModal
}: IIssuerModalProps) => {
  const issuerName = issuer.display?.at(0)?.name || 'Issuer'
  const issuerLogoUrl = issuer.display?.at(0)?.logo?.uri || ''
  const issuerUrl = credential?.credentialSubject.achievement?.creator?.id

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
        {issuerLogoUrl && (
          <img
            alt={`${issuerName} logo`}
            className="h-16 w-16 rounded-lg"
            src={issuerLogoUrl}
          />
        )}

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium">{issuerName}</h2>

          {issuerUrl && (
            <a
              className="text-foreground/70 text-sm"
              href={issuerUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {issuerUrl}
            </a>
          )}
        </div>
      </div>

      {credential?.credentialSubject.achievement?.creator?.description && (
        <div className="mt-6">
          <Markdown>
            {credential.credentialSubject.achievement.creator.description}
          </Markdown>
        </div>
      )}

      <hr className="border-foreground/5 my-10" />

      {/* {issuer.certifications && (
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
      )} */}

      {/* {issuer.trust_ecosystems &&
        (issuer.trust_ecosystems?.length ?? 0) > 0 && (
          <>
            <h3 className="mb-4 text-xl font-medium">Trust Ecosystems</h3>

            <div>
              {issuer.trust_ecosystems.map((trustEcosystem, index) => (
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
                    {trustEcosystem.members_amount} members
                  </p>
                </div>
              ))}
            </div>
          </>
        )} */}
    </Modal>
  )
}

export default IssuerModal
