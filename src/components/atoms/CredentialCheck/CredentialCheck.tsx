import ProgressIcon from '@/components/atoms/ProgressIcon/ProgressIcon'

interface ICredentialCheckProps {
  check: {
    status: 'passed' | 'failed'
    name: string
    error?: string
    description?: string
  }
}

const CredentialCheck = ({ check }: ICredentialCheckProps) => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <ProgressIcon
          status={check.status === 'passed' ? 'success' : 'failed'}
        />

        <div className="flex items-center gap-4">
          <p className="font-medium">{check.name}</p>

          {check.error && (
            <span className="text-foreground/50 text-xs">*{check.error}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CredentialCheck
