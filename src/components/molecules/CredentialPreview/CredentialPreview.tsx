import { motion } from 'motion/react'

import Card from '@/components/atoms/Card/Card'
import { TCredential } from '@/lib/schemas/verificationResultSchema'
import forceRepaint from '@/utils/forceRepaint'

interface ICredentialPreviewProps {
  credential: TCredential
}

const CredentialPreview = ({ credential }: ICredentialPreviewProps) => {
  return (
    <div className="fade-in fast relative flex w-full max-w-md flex-col gap-2 [animation-delay:700ms]">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        onAnimationComplete={forceRepaint}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Card className="" title={credential.type}>
          <div className="text-foreground/60">
            <p className="mb-6">{credential?.name}</p>
            <p className="text-sm">Issuer • {credential?.issuer.name}</p>
          </div>
        </Card>
      </motion.div>

      {credential.verifier?.logoUrl && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="top-0 right-0 z-10 md:absolute md:translate-x-8 md:-translate-y-8"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          onAnimationComplete={forceRepaint}
          transition={{ duration: 0.2, delay: 1.3 }}
        >
          <Card
            className="relative h-12 rounded-2xl p-2.5 shadow-md backdrop-blur-3xl md:bg-[#2D2F31]"
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
    </div>
  )
}

export default CredentialPreview
