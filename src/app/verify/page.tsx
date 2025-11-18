import VerificationDashboard from '@/components/organisms/VerificationDashboard/VerificationDashboard'
import { VerificationContextProvider } from '@/contexts/VerificationContext'

// An example JWT that is valid would look like this: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjM0NzQ1NTIsImF1ZCI6ImRpZDp3ZWI6aHVuZ3J5LWhlaXNlbmJlcmcuZGV2Mi5pbXBpZXJjZS5jb20ifQ.C_jXcGqBpyRda53SBCGoBA0DsYioawMTE5Q8WCSA3Wo
const Verify = () => {
  return (
    <VerificationContextProvider>
      <VerificationDashboard />
    </VerificationContextProvider>
  )
}

export default Verify
