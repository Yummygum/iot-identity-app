import VerificationDashboard from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { VerificationContextProvider } from '@/contexts/VerificationContext'

const Verify = () => {
  return (
    <VerificationContextProvider>
      <VerificationDashboard />
    </VerificationContextProvider>
  )
}

export default Verify
