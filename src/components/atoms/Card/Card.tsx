import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ICardProps extends ComponentProps<'div'> {
  title: string
}

const Card = ({ title, className, children, ...props }: ICardProps) => {
  return (
    <div
      className={twMerge(
        'rounded-2xl border border-white/8 bg-white/4 p-4 shadow',
        className
      )}
      {...props}
    >
      <div className="mb-2 flex flex-col justify-between">
        <h2 className="text-lg font-medium">{title}</h2>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Card
