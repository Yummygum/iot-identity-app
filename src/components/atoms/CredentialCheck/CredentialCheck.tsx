import ProgressIcon from '@/components/atoms/ProgressIcon/ProgressIcon'

export interface ICredentialCheckProps {
  check: {
    status: 'passed' | 'failed'
    name: string
    payload?: unknown
  }
}

const CredentialCheck = ({ check }: ICredentialCheckProps) => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <ProgressIcon
          status={check.status === 'passed' ? 'success' : 'failed'}
        />

        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <p className="font-medium">{check.name}</p>

          {check.status !== 'passed' && typeof check.payload === 'string' && (
            <span className="text-foreground/50 text-xs">*{check.payload}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CredentialCheck
