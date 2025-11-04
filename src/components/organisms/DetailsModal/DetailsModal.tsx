import { motion } from 'motion/react'
import { Dispatch, SetStateAction } from 'react'

import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'
import DegreeTable from '@/components/organisms/DegreeTable/DegreeTable'
import { TCredential } from '@/lib/schemas/verificationResultSchema'

interface IDetailsModalProps {
  credential: TCredential
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const DetailsModal = ({ credential, setIsModalOpen }: IDetailsModalProps) => {
  return (
    <motion.div className="fixed top-0 left-0 flex h-screen w-full justify-end p-1">
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute top-0 left-0 h-full w-full bg-black/50 backdrop-blur-[2px]"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={() => setIsModalOpen(false)}
      />

      <motion.div
        animate={{ x: 0, opacity: 1 }}
        className="right-0 flex h-full w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/7 backdrop-blur-2xl"
        exit={{ x: '100%', opacity: 0 }}
        initial={{ x: '100%', opacity: 0 }}
        transition={{
          duration: 0.2
        }}
      >
        <header className="top-0 flex items-center justify-between border-b border-white/8 bg-white/4 p-4">
          <button
            className="flex aspect-square h-8 cursor-pointer items-center justify-center rounded-sm hover:bg-white/7"
            onClick={() => setIsModalOpen(false)}
          >
            <Icon name="caretDoubleRight" />
          </button>

          <button className="flex items-center gap-1 rounded-md bg-white/15 px-3 py-1.5 transition-colors hover:bg-white/20">
            Issuer details
            <Icon name="arrowRightUp" />
          </button>
        </header>

        <div className="max-h-full overflow-y-auto p-6 md:p-8">
          <div className="mb-16">
            <h2 className="mb-2 text-3xl font-medium">{credential.type}</h2>

            <p className="text-foreground/60 mb-8">{credential.name}</p>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Card className="flex h-8 w-8 items-center justify-center rounded-sm p-0">
                  <Icon name="calendar" />
                </Card>
                <span className="text-foreground/60">2021 - 2025</span>
              </div>

              <div className="flex items-center gap-3">
                <Card className="flex h-8 w-8 items-center justify-center rounded-sm p-0">
                  <Icon name="mapPin" />
                </Card>
                <span className="text-foreground/60">
                  Hogeschool van Amsterdam
                </span>
              </div>
            </div>
          </div>

          <DegreeTable />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DetailsModal
