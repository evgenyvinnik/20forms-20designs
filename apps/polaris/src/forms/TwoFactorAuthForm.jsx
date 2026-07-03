import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Button,
  Text,
  InlineStack,
} from '@shopify/polaris'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }, [])

  const handleResend = useCallback(() => {
    alert('A new code has been sent!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="p">Enter the code from your authenticator app or SMS.</Text>
        <TextField
          label="Verification code"
          type="text"
          value={code}
          onChange={setCode}
          autoComplete="one-time-code"
          requiredIndicator
          maxLength={6}
          pattern="\d{6}"
          inputMode="numeric"
        />
        <TextField
          label="Backup code (optional)"
          type="text"
          value={backupCode}
          onChange={setBackupCode}
          pattern="[A-Za-z0-9]{6,12}"
        />
        <InlineStack gap="300">
          <Button submit variant="primary">
            Verify
          </Button>
          <Button onClick={handleResend}>Resend code</Button>
        </InlineStack>
      </FormLayout>
    </form>
  )
}

export default TwoFactorAuthForm
