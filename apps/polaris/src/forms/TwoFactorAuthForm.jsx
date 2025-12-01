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

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Two-factor authentication verified!')
  }, [])

  const handleResend = useCallback(() => {
    alert('Verification code resent!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="p">
          Enter the 6-digit verification code sent to your device.
        </Text>
        <TextField
          label="Verification code"
          type="text"
          value={code}
          onChange={setCode}
          autoComplete="one-time-code"
          requiredIndicator
          maxLength={6}
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
