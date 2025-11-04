import { motion } from 'motion/react'

import Card from '@/components/atoms/Card/Card'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface ICredentialOverviewCardProps {
  credential: TCredential
}

const CredentialOverviewCard = ({
  credential
}: ICredentialOverviewCardProps) => {
  return (
    <div className="fade-in fast relative w-full max-w-md [animation-delay:700ms]">
      {credential.verifier?.logoUrl && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-0 right-0 translate-x-8 -translate-y-8"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2, delay: 1.3 }}
        >
          <Card
            className="h-12 rounded-2xl border-white/15 bg-[#2C2D2F] p-2.5 shadow-md"
            contentClassName="h-full"
          >
            <div className="h-full">
              <img
                alt={`${credential.verifier.name} logo`}
                className="h-full w-auto"
                src={credential.verifier.logoUrl}
              />
            </div>
          </Card>
        </motion.div>
      )}

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Card className="" title="Bachelor's degree">
          <div className="text-foreground/60">
            <p className="mb-6">{credential?.name}</p>

            <p className="text-sm">Issuer • {credential?.issuer.name}</p>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default CredentialOverviewCard
