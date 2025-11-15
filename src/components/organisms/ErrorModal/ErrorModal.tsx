import Card from '@/components/atoms/Card/Card'
import Icon from '@/components/atoms/Icon'

interface IErrorModalProps {
  error: string
  isOpen: boolean
}

const ErrorModal = ({ error, isOpen }: IErrorModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fade-in absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      <Card className="fade-in relative z-10 w-full max-w-md rounded-2xl p-8 backdrop-blur-2xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <Icon
              color="#ef4444"
              height={40}
              name="exclamationMark"
              width={40}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Error</h2>

            <p className="text-white/70">{error}</p>

            <p className="mt-8 text-xs text-white/50">
              This credential could not be verified, which may indicate that it
              is not authentic or has been tampered with.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ErrorModal
