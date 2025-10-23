import { HTMLAttributes } from 'react'

interface ILabeledValueProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string
}

const LabeledValue = ({ label, value, ...props }: ILabeledValueProps) => {
  return (
    <div {...props}>
      <p className="text-foreground/50 text-sm">{label}</p>
      <p>{value}</p>
    </div>
  )
}

export default LabeledValue
