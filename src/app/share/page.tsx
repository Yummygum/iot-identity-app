import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

import QRCodeCard from '@/components/molecules/QRCodeCard/QRCodeCard'
import WhiteLabelGradients from '@/components/molecules/WhiteLabelGradients/WhiteLabelGradients'
import { COLORS } from '@/lib/constants'

const STEPS = [
  'Download the UniMe app via the Google Play Store or the Apple Store.',
  'Create an account or login with your existing account.',
  'Scan the QR code and  start the verification.'
]

const SharePage = async ({
  searchParams
}: {
  searchParams: Promise<{ url: string }>
}) => {
  const { url } = await searchParams

  if (!url) {
    notFound()
  }

  return (
    <div className="h-full w-full">
      <WhiteLabelGradients
        primaryColor={COLORS.primary}
        secondaryColor={COLORS.secondary}
      />

      <div className="relative mx-auto flex h-full min-h-screen w-full max-w-7xl flex-col items-center justify-center p-8">
        <Image
          alt=""
          className="object-cover"
          fill
          src={'/img/background-texture-3.png'}
        />

        <div className="mt-32 grow lg:mt-0 lg:grow-0">
          <QRCodeCard url={url} />
        </div>

        <div className="bottom-0 flex w-full flex-col gap-10 sm:p-8 lg:absolute">
          <div className="mx-auto flex w-fit flex-col justify-between gap-8 lg:w-full lg:flex-row">
            {STEPS.map((step, index) => (
              <div className="flex max-w-64 flex-col gap-2" key={index}>
                <h3 className="font-semibold text-white">Step {index + 1}</h3>
                <p className="text-foreground/70 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div className="text-foreground/30 py-6 text-center text-xs">
            <p>UniTrust 2025 Impierce Technologies B.V.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePage
