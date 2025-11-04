import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva([
  'bg-white/50 text-black font-medium w-full text-start rounded-full py-3 px-6'
])

const Button = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button className={twMerge(buttonVariants(), className)} {...props}>
      {children}
    </button>
  )
}

export default Button
