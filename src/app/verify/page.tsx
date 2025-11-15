import VerificationDashboard from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { VerificationContextProvider } from '@/contexts/VerificationContext'

// An example JWT that is valid would look like this: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjMxOTY5NTMsImF1ZCI6ImRpZDp3ZWI6bG9jYWxob3N0JTNBMzAzNCJ9._XwaUaiqFsodcLFVEacNDDB9K4Wm6k7go14NzGFAr3c
const Verify = () => {
  return (
    <VerificationContextProvider>
      <VerificationDashboard />
    </VerificationContextProvider>
  )
}

export default Verify
