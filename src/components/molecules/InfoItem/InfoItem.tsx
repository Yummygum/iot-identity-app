import React from 'react'

import Card from '@/components/atoms/Card/Card'
import Icon, { TIconName } from '@/components/atoms/Icon'

interface IInfoItemProps {
  title: string
  value?: string
  iconName: TIconName
  isLink?: boolean
}

const InfoItem = ({ title, value, iconName, isLink }: IInfoItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Card className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm p-0">
        <Icon name={iconName} />
      </Card>
      <div className="flex max-w-full min-w-0 flex-col text-sm">
        <span className="font-medium text-white">{title}</span>

        <span className="text-foreground/50 truncate text-xs">
          {isLink ? <a href={value}>{value}</a> : value}
        </span>
      </div>
    </div>
  )
}

export default InfoItem
