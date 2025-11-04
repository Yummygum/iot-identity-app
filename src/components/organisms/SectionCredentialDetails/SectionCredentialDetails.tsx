import { AnimatePresence } from 'motion/react'
import { useState } from 'react'

import Button from '@/components/atoms/Button/Button'
import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import DetailsModal from '@/components/organisms/DetailsModal/DetailsModal'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ISectionCredentialDetailsProps {
  isLoading?: boolean
  data?: TCredential
}

const SectionCredentialDetails = ({
  data,
  isLoading
}: ISectionCredentialDetailsProps) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  if (isLoading) {
    return null
  }

  return (
    <section>
      <Card title="Credential details">
        {data ? (
          <div className="text-foreground/40 flex flex-col gap-6 text-sm">
            <p>
              Reviewing these details helps you understand what the credential
              stands for, who it was awarded to, and under what conditions it
              remains valid.
            </p>

            <p>
              {data.type ? `${data.type} • ` : ''}
              {data.name}
            </p>

            <Button
              className="flex items-center justify-between"
              onClick={() => setIsDetailsModalOpen(true)}
            >
              <span>See more details</span>
              <Icon height={24} name="arrowRight" width={24} />
            </Button>
          </div>
        ) : (
          <p className="text-foreground/60 text-center">
            No credential to show
          </p>
        )}
      </Card>

      <AnimatePresence>
        {isDetailsModalOpen && data && (
          <DetailsModal
            credential={data}
            setIsModalOpen={setIsDetailsModalOpen}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default SectionCredentialDetails
