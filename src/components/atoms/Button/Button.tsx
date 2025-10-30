import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const buttonVariants = cva([
  'bg-white/50 text-black font-medium w-full text-start rounded-full py-3 px-6'
])

const Button = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>) => {
  return (
    <button className={buttonVariants({ className })} {...props}>
      {children}
    </button>
  )
}

export default Button
