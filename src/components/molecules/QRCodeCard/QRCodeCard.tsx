import React from 'react'
import QRCode from 'react-qr-code'

import Card from '@/components/atoms/Card/Card'

interface IQRCodeCardProps {
  url: string
}

const QRCodeCard = ({ url }: IQRCodeCardProps) => {
  return (
    <Card className="h-fit w-fit p-6 backdrop-blur-3xl">
      <QRCode
        bgColor={'transparent'}
        className="h-fit w-full"
        fgColor="white"
        value={url}
      />
    </Card>
  )
}

export default QRCodeCard
